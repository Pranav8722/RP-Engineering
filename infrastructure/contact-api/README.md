# Contact form backend

This folder contains the AWS Lambda contact API for the R.P Engineering website.

## What it does

The browser posts a contact enquiry to API Gateway. Lambda validates it, rejects basic bot submissions, and sends the enquiry to the configured inbox through Amazon SES. AWS credentials and email-service credentials never appear in the website or Git repository.

## First-time AWS setup

1. In the **same AWS region** where you will deploy the stack, open **Amazon SES** and verify the address or domain that will be used as the sender.
2. If your SES account is still in the sandbox, verify the recipient inbox too. The recipient must receive the verification email and confirm it.
3. Confirm the recipient address before deployment. The current website displays `sjbadaskar@reddifmail.com`; make sure that is the intended, deliverable mailbox.
4. Install the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) and configure AWS credentials locally.

## Deploy

Run these commands from this folder:

```powershell
sam build
sam deploy --guided
```

During the guided deployment, provide the SES-verified sender address and the enquiry recipient address. Copy the `ContactApiUrl` output after deployment.

## Connect Cloudflare Pages

In **Cloudflare Dashboard → Workers & Pages → rp-engineering → Settings → Variables and Secrets**:

1. Add a production environment variable named `NEXT_PUBLIC_CONTACT_API_URL`.
2. Paste the `ContactApiUrl` output as its value.
3. Redeploy the latest `main` deployment.

The variable is intentionally public because it is only the API URL. Do not add AWS keys, SES SMTP credentials, or email passwords to Cloudflare or this repository.

## Test

After deployment, submit the website form using a real test email address. In Lambda, use **Monitor → View CloudWatch logs** if delivery fails. Keep the API limited to the two website origins defined in the template.
