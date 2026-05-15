const SHEET_NAME = 'Leads';
const EMAIL_TO = 'support@rupebazaar.in';

function doPost(e) {
  try {
    const sheet = getSheet_();
    const body = JSON.parse(e.postData.contents || '{}');
    const leadId = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss') + '-' + String(body.phone || 'lead').slice(-4);
    const leadQuality = getLeadQuality_(body);
    const row = [
      leadId,
      new Date(),
      body.name || '',
      body.phone || '',
      body.email || '',
      body.city || '',
      body.service || '',
      body.cibilScore || '',
      body.loanAmount || '',
      body.income || '',
      body.employment || '',
      body.existingEmi || '',
      body.callbackTime || '',
      body.message || '',
      body.source || 'RupeBazaar.in website',
      body.pageUrl || '',
      body.pageTitle || '',
      body.createdAt || '',
      leadQuality,
      'New'
    ];

    sheet.appendRow(row);

    const mailBody = [
      'New RupeBazaar.in lead received',
      '',
      'Lead ID: ' + leadId,
      'Lead Quality: ' + leadQuality,
      '',
      'Name: ' + (body.name || ''),
      'Phone: ' + (body.phone || ''),
      'Email: ' + (body.email || ''),
      'City: ' + (body.city || ''),
      'Service: ' + (body.service || ''),
      'CIBIL / Credit Score: ' + (body.cibilScore || ''),
      'Loan Amount: ' + (body.loanAmount || ''),
      'Income: ' + (body.income || ''),
      'Employment: ' + (body.employment || ''),
      'Existing EMI: ' + (body.existingEmi || ''),
      'Preferred Callback Time: ' + (body.callbackTime || ''),
      'Message: ' + (body.message || 'Not provided'),
      'Source: ' + (body.source || 'RupeBazaar.in website'),
      'Page URL: ' + (body.pageUrl || ''),
      'Page Title: ' + (body.pageTitle || ''),
      '',
      'Reminder: Do not ask customer for OTP, PIN, password, or net-banking details.'
    ].join('\n');

    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: '[' + leadQuality + '] RupeBazaar.in Lead - ' + (body.service || 'Loan') + ' - ' + (body.city || 'Unknown City'),
      body: mailBody
    });

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function getSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  const headers = ['Lead ID', 'Submitted At', 'Name', 'Phone', 'Email', 'City', 'Service', 'CIBIL / Credit Score', 'Loan Amount', 'Income', 'Employment', 'Existing EMI', 'Preferred Callback Time', 'Message', 'Source', 'Page URL', 'Page Title', 'Created At', 'Lead Quality', 'Status'];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  } else {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
  return sheet;
}

function getLeadQuality_(body) {
  let score = 0;
  if (body.phone) score += 1;
  if (body.city) score += 1;
  if (body.service) score += 1;
  if (body.loanAmount) score += 1;
  if (body.income) score += 1;
  if (body.cibilScore) score += 1;
  if (body.existingEmi) score += 1;
  if (body.callbackTime) score += 1;
  if (score >= 7) return 'Hot';
  if (score >= 5) return 'Warm';
  return 'Basic';
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
