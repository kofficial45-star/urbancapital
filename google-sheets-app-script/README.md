1. Open Google Sheets and create a new sheet.
2. Go to `Extensions > Apps Script`.
3. Paste `Code.gs` into the Apps Script editor.
4. Deploy as `Web app`.
5. Set access to `Anyone`.
6. Copy the web app URL.
7. Open `js/lead-config.js`.
8. Paste the URL into:

```js
window.RUPEBAZAAR_FORM_ENDPOINT = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
```

After that, each enquiry will:
- save into the Google Sheet
- send an email to `support@rupebazaar.in`
- open WhatsApp with the same formatted lead as backup
