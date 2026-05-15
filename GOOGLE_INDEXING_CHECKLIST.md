# RupeBazaar.in Google Indexing Checklist

Use this after uploading the latest folder to GitHub Pages.

## 1. Confirm Live Pages

- https://rupebazaar.in/
- https://rupebazaar.in/loans.html
- https://rupebazaar.in/personal-loan.html
- https://rupebazaar.in/home-loan.html
- https://rupebazaar.in/business-loan.html
- https://rupebazaar.in/gold-loan.html
- https://rupebazaar.in/calculators.html
- https://rupebazaar.in/eligibility.html
- https://rupebazaar.in/loan-faq.html
- https://rupebazaar.in/sitemap.xml
- https://rupebazaar.in/robots.txt

## 2. Google Search Console Setup

1. Open Google Search Console.
2. Add property as domain property: `rupebazaar.in`.
3. Verify domain using DNS TXT record.
4. Open **Sitemaps**.
5. Submit: `https://rupebazaar.in/sitemap.xml`.

## 3. Request Indexing

Use URL Inspection and request indexing for these first:

- `https://rupebazaar.in/`
- `https://rupebazaar.in/loans.html`
- `https://rupebazaar.in/personal-loan.html`
- `https://rupebazaar.in/home-loan.html`
- `https://rupebazaar.in/business-loan.html`
- `https://rupebazaar.in/calculators.html`
- `https://rupebazaar.in/eligibility.html`
- `https://rupebazaar.in/loan-faq.html`
- `https://rupebazaar.in/personal-loan-eligibility-improve.html`
- `https://rupebazaar.in/cibil-score-loan-approval.html`
- `https://rupebazaar.in/home-loan-documents-checklist.html`
- `https://rupebazaar.in/business-loan-rejection-reasons.html`
- `https://rupebazaar.in/gold-loan-vs-personal-loan.html`
- `https://rupebazaar.in/indore-loan-services.html`

## 4. Technical Checks

- `robots.txt` should show the sitemap URL.
- `sitemap.xml` should open without error.
- Main pages should open on HTTPS.
- Forms should show CIBIL / Credit Score field.
- Footer legal pages should open:
  - `privacy-policy.html`
  - `terms.html`
  - `disclaimer.html`
- Lead form should save:
  - CIBIL score
  - Existing EMI
  - Preferred callback time
  - Page URL
  - Lead quality

## 5. What Not To Index

These demo/template pages are blocked in `robots.txt`:

- `elements.html`
- `single-post.html`

## 6. After 24-72 Hours

- Check Search Console > Pages.
- Fix any "Not found", "Duplicate", or "Crawled - currently not indexed" issues.
- Continue adding useful loan content weekly.

## 7. Launch Trust Checks

- About page should mention pan-India support and Indore office.
- No page should promise guaranteed approval.
- No form should ask for OTP, PIN, password, or net-banking details.
- Apps Script should be redeployed after updating `Code.gs`.
