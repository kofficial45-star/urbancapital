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
    note.textContent = 'Your details are used only for loan consultation callback. Approval depends on lender policy.';
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
      payload.source = payload.source || 'RupeBazaar.in website';
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
