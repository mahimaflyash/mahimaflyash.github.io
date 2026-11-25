# Mahima Fly Ash Bricks — Website

Angular website for Mahima Fly Ash Bricks, Baripada. Hosted free on GitHub Pages at
**https://mahimaflyash.github.io**.

## Update content (no coding needed)
Edit **`src/app/data/site-data.ts`**: phone, email, tagline, products & specs, gallery,
testimonials, FAQ, and the Web3Forms key for the enquiry form.

Photos go in `public/images/` (see `public/images/README.md`).

## Enquiry form email setup
1. Go to https://web3forms.com and enter the business email to get a free **Access Key**.
2. Paste it into `web3formsAccessKey` in `site-data.ts`.

Until then, the form offers to send the enquiry on WhatsApp instead.

## Run locally
```bash
npm install
npm start          # http://localhost:4200
```

## Deploy
Every push to the `main` branch builds and publishes automatically (`.github/workflows/deploy.yml`).
One-time setup: GitHub repo → **Settings → Pages → Source: GitHub Actions**.
