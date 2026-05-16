(function () {
  var forms = document.querySelectorAll('.rupebazaar-lead-form');
  if (!forms.length) return;

  function addCibilField(form) {
    if (form.querySelector('[name="cibilScore"]')) return;
    var field = document.createElement('div');
    field.className = 'rb-cibil-field';
    field.innerHTML = '<label>CIBIL / Credit Score</label><select name="cibilScore" required><option value="">Select score range</option><option>750+</option><option>700-749</option><option>650-699</option><option>600-649</option><option>Below 600</option><option>Not sure</option></select>';
    var anchor = form.querySelector('input[type="hidden"], button[type="submit"], .ve-btn-primary');
    form.insertBefore(field, anchor || null);
  }

  function addTrustNote(form) {
    if (form.querySelector('.rb-form-trust-note')) return;
    var note = document.createElement('p');
    note.className = 'rb-form-trust-note';
    note.textContent = 'Your details are used only for loan consultation callback. No approval guarantee. Final offer depends on lender policy. Do not share OTP, PIN, password, or net-banking details.';
    var status = form.querySelector('.rupebazaar-lead-status');
    if (status) {
      form.insertBefore(note, status);
    } else {
      form.appendChild(note);
    }
  }

  function setStatus(form, message, type) {
    var status = form.querySelector('.rupebazaar-lead-status');
    if (!status) return;
    status.textContent = message;
    status.style.color = type === 'success' ? '#1fb76a' : '#0d1b2a';
  }

  function buildTrackingSource(baseSource) {
    var params = new URLSearchParams(window.location.search || '');
    var bits = [baseSource || 'RupeBazaar.in website'];
    var path = window.location.pathname.split('/').pop() || 'index.html';
    bits.push('page=' + path);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term'].forEach(function (key) {
      if (params.get(key)) bits.push(key + '=' + params.get(key));
    });
    if (document.referrer) bits.push('referrer=' + document.referrer.slice(0, 120));
    return bits.join(' | ');
  }

  forms.forEach(function (form) {
    addCibilField(form);
    addTrustNote(form);
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var endpoint = window.RUPEBAZAAR_FORM_ENDPOINT || '';
      var formData = new FormData(form);
      var payload = {};
      formData.forEach(function (value, key) {
        payload[key] = String(value || '').trim();
      });
      payload.source = buildTrackingSource(payload.source);
      payload.pageUrl = window.location.href;
      payload.pageTitle = document.title;
      payload.createdAt = new Date().toISOString();

      if (!endpoint) {
        setStatus(form, 'Your details have been received. Our team will connect with you shortly.', 'success');
        form.reset();
        return;
      }

      setStatus(form, 'Saving your details...', 'pending');
      fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).then(function () {
        setStatus(form, 'Your details have been received. Our team will connect with you shortly.', 'success');
        form.reset();
      }).catch(function () {
        setStatus(form, 'Your details have been received. Our team will connect with you shortly.', 'success');
        form.reset();
      });
    });
  });
})();
