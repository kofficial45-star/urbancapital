const SHEET_NAME = 'Leads';
const EMAIL_TO = 'support@rupebazaar.in';

function doPost(e) {
  try {
    const sheet = getSheet_();
    const body = JSON.parse(e.postData.contents || '{}');
    const row = [
      new Date(),
      body.name || '',
      body.phone || '',
      body.email || '',
      body.service || '',
      body.message || '',
      body.source || 'RupeBazaar.in website',
      body.createdAt || ''
    ];

    sheet.appendRow(row);

    const mailBody = [
      'New RupeBazaar.in lead received',
      '',
      'Name: ' + (body.name || ''),
      'Phone: ' + (body.phone || ''),
      'Email: ' + (body.email || ''),
      'Service: ' + (body.service || ''),
      'Message: ' + (body.message || 'Not provided'),
      'Source: ' + (body.source || 'RupeBazaar.in website')
    ].join('\n');

    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: 'New RupeBazaar.in Lead - ' + (body.name || 'Unknown'),
      body: mailBody
    });

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function getSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Submitted At', 'Name', 'Phone', 'Email', 'Service', 'Message', 'Source', 'Created At']);
  }
  return sheet;
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
