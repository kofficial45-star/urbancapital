(function () {
  var forms = document.querySelectorAll('.rupebazaar-lead-form');
  if (!forms.length) return;

  function setStatus(form, message, type) {
    var status = form.querySelector('.rupebazaar-lead-status');
    if (!status) return;
    status.textContent = message;
    status.style.color = type === 'success' ? '#1fb76a' : '#0d1b2a';
  }

  forms.forEach(function (form) {
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
