const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const ses = new SESv2Client({});
const MAX_LENGTHS = { name: 120, company: 160, email: 254, phone: 40, message: 4000 };

function json(statusCode, body, origin) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(origin ? { "access-control-allow-origin": origin, vary: "Origin" } : {}),
    },
    body: JSON.stringify(body),
  };
}

function normalise(value, limit) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, limit);
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
}

function getOrigin(headers) {
  const matchedHeader = Object.entries(headers || {}).find(([key]) => key.toLowerCase() === "origin");
  return matchedHeader ? matchedHeader[1] : "";
}

exports.handler = async (event) => {
  const origin = getOrigin(event.headers);
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || "").split(",").map((value) => value.trim());

  if (!origin || !allowedOrigins.includes(origin)) return json(403, { message: "Request origin is not allowed." });

  let payload;
  try {
    const body = event.isBase64Encoded ? Buffer.from(event.body || "", "base64").toString("utf8") : event.body || "{}";
    payload = JSON.parse(body);
  } catch {
    return json(400, { message: "Invalid enquiry data." }, origin);
  }

  // Hidden field: automated bots commonly populate every form field.
  if (normalise(payload.website, 200)) return json(202, { message: "Enquiry received." }, origin);

  const name = normalise(payload.name, MAX_LENGTHS.name);
  const company = normalise(payload.company, MAX_LENGTHS.company);
  const email = normalise(payload.email, MAX_LENGTHS.email);
  const phone = normalise(payload.phone, MAX_LENGTHS.phone);
  const message = normalise(payload.message, MAX_LENGTHS.message);
  const emailIsValid = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !phone || !message || !emailIsValid) {
    return json(400, { message: "Please provide your name, phone number, and enquiry details." }, origin);
  }

  const plainText = [
    "New enquiry from rp-engineering.in",
    "",
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email || "Not provided"}`,
    `Phone: ${phone}`,
    "",
    "Requirement:",
    message,
  ].join("\n");

  const html = `
    <h2>New enquiry from rp-engineering.in</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
    <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Requirement:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`;

  try {
    await ses.send(new SendEmailCommand({
      FromEmailAddress: process.env.FROM_EMAIL,
      Destination: { ToAddresses: [process.env.TO_EMAIL] },
      ReplyToAddresses: email ? [email] : undefined,
      Content: {
        Simple: {
          Subject: { Data: `Website enquiry from ${name}`, Charset: "UTF-8" },
          Body: {
            Text: { Data: plainText, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      },
    }));
  } catch (error) {
    console.error("Unable to send contact email", { errorName: error?.name });
    return json(502, { message: "We could not send your enquiry. Please try again shortly." }, origin);
  }

  return json(202, { message: "Enquiry sent." }, origin);
};
