(function () {
  var baseUrl = 'https://rupebazaar.in/';
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var pagePath = page === 'index.html' ? '' : page;
  var canonicalUrl = baseUrl + pagePath;
  var defaults = {
    title: 'RupeBazaar.in - Loan Consultant in Indore',
    description: 'RupeBazaar.in helps customers compare loans, calculate EMI, check eligibility, and get assisted loan support across India.',
    image: baseUrl + 'homepage.png'
  };
  var map = {
    'index.html': {
      title: 'RupeBazaar.in - Loan Consultant in Indore | Personal, Home & Business Loan Help',
      description: 'RupeBazaar.in offers personal loan, home loan, business loan, gold loan, EMI calculator, eligibility check, and assisted loan guidance in Indore and across India.'
    },
    'loans.html': {
      title: 'Loan Marketplace - Compare Loan Options | RupeBazaar.in',
      description: 'Compare personal loan, home loan, business loan, gold loan, car loan, and education loan options with RupeBazaar.in.'
    },
    'personal-loan.html': {
      title: 'Personal Loan in Indore - Eligibility, EMI & Apply Help | RupeBazaar.in',
      description: 'Get personal loan guidance in Indore with EMI planning, eligibility check, partner comparison, and assisted callback from RupeBazaar.in.'
    },
    'business-loan.html': {
      title: 'Business Loan in Indore - MSME & Working Capital Help | RupeBazaar.in',
      description: 'Business loan support for MSME, working capital, stock purchase, expansion, and cash flow needs with RupeBazaar.in.'
    },
    'home-loan.html': {
      title: 'Home Loan in Indore - EMI, Eligibility & Transfer Help | RupeBazaar.in',
      description: 'Plan home loan, balance transfer, top-up, construction, and renovation finance with RupeBazaar.in.'
    },
    'gold-loan.html': {
      title: 'Gold Loan in Indore - Quick Secured Loan Help | RupeBazaar.in',
      description: 'Gold loan guidance for secured borrowing, valuation, tenure, EMI planning, and assisted follow-up with RupeBazaar.in.'
    },
    'car-loan.html': {
      title: 'Car Loan in Indore - New & Used Car EMI Help | RupeBazaar.in',
      description: 'Compare car loan EMI, tenure, and eligibility for new and used car finance with RupeBazaar.in.'
    },
    'education-loan.html': {
      title: 'Education Loan Guidance - EMI & Eligibility Help | RupeBazaar.in',
      description: 'Education loan guidance for India and abroad with EMI planning, eligibility support, and manual expert follow-up.'
    },
    'calculators.html': {
      title: 'Loan EMI Calculator - Personal, Home, Business & Gold Loan | RupeBazaar.in',
      description: 'Use RupeBazaar.in loan EMI calculator for personal, home, business, gold, car, and education loan planning.'
    },
    'eligibility.html': {
      title: 'Check Loan Eligibility Online | RupeBazaar.in',
      description: 'Submit income, city, employment, and loan requirement details to check loan eligibility with RupeBazaar.in.'
    },
    'loan-guides.html': {
      title: 'Loan Guides for Indian Borrowers | RupeBazaar.in',
      description: 'Read loan guides on EMI, eligibility, personal loans, home loans, business loans, gold loans, and repayment planning.'
    },
    'contact.html': {
      title: 'Contact RupeBazaar.in - Free Loan Consultation',
      description: 'Contact RupeBazaar.in for free loan consultation, eligibility help, EMI planning, and assisted loan guidance.'
    },
    'about.html': {
      title: 'About RupeBazaar.in - Loan Assistance Since 2018',
      description: 'Learn about RupeBazaar.in, a loan assistance and financial guidance platform serving Indian borrowers since 2018.'
    },
    'services.html': {
      title: 'Loan Services - Personal, Business, Home & Gold Loan | RupeBazaar.in',
      description: 'Explore RupeBazaar.in loan services including personal loan, business loan, home loan, gold loan, repayment planning, and eligibility support.'
    }
  };
  var meta = map[page] || defaults;
  var title = meta.title || defaults.title;
  var description = meta.description || defaults.description;

  document.title = title;

  function upsertMeta(selector, attrs) {
    var el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      document.head.appendChild(el);
    }
    Object.keys(attrs).forEach(function (key) {
      el.setAttribute(key, attrs[key]);
    });
  }

  function upsertLink(rel, href) {
    var el = document.head.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function addJsonLd(id, data) {
    if (document.getElementById(id)) return;
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  upsertMeta('meta[name="description"]', { name: 'description', content: description });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: defaults.image });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
  upsertLink('canonical', canonicalUrl);

  addJsonLd('rb-org-schema', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RupeBazaar.in',
    url: baseUrl,
    logo: baseUrl + 'img/core-img/favicon.ico',
    email: 'support@rupebazaar.in',
    telephone: '+919343153987'
  });

  addJsonLd('rb-local-schema', {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'RupeBazaar.in',
    url: baseUrl,
    telephone: '+919343153987',
    email: 'support@rupebazaar.in',
    areaServed: ['Indore', 'Madhya Pradesh', 'India'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452010',
      addressCountry: 'IN'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00'
    }]
  });

  if (page === 'eligibility.html' || page === 'contact.html') {
    addJsonLd('rb-faq-schema', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How can I check my loan eligibility?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fill the RupeBazaar.in eligibility form with your income, city, employment type, and loan requirement. Our team will review and connect with you.' }
        },
        {
          '@type': 'Question',
          name: 'Does RupeBazaar.in charge customers?',
          acceptedAnswer: { '@type': 'Answer', text: 'The initial consultation and eligibility enquiry flow on RupeBazaar.in is free for customers.' }
        }
      ]
    });
  }
})();
