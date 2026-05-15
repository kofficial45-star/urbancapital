(function () {
  var baseUrl = 'https://rupebazaar.in/';
  var page = window.location.pathname.split('/').pop() || 'index.html';
  var pagePath = page === 'index.html' ? '' : page;
  var canonicalUrl = baseUrl + pagePath;
  var defaults = {
    title: 'RupeBazaar.in - Loan Help Across India',
    description: 'RupeBazaar.in helps customers compare loans, calculate EMI, check eligibility, and get assisted loan support across India.',
    image: baseUrl + 'homepage.png'
  };
  var map = {
    'index.html': {
      title: 'RupeBazaar.in - Loan Help Across India | Personal, Home & Business Loans',
      description: 'RupeBazaar.in offers personal loan, home loan, business loan, gold loan, EMI calculator, eligibility check, and assisted loan guidance across India.'
    },
    'loans.html': {
      title: 'Loan Marketplace - Compare Loan Options | RupeBazaar.in',
      description: 'Compare personal loan, home loan, business loan, gold loan, car loan, and education loan options with RupeBazaar.in.'
    },
    'personal-loan.html': {
      title: 'Personal Loan in India - Eligibility, EMI & Apply Help | RupeBazaar.in',
      description: 'Get personal loan guidance across India with EMI planning, eligibility check, partner comparison, and assisted callback from RupeBazaar.in.'
    },
    'business-loan.html': {
      title: 'Business Loan in India - MSME & Working Capital Help | RupeBazaar.in',
      description: 'Business loan support for MSME, working capital, stock purchase, expansion, and cash flow needs with RupeBazaar.in.'
    },
    'home-loan.html': {
      title: 'Home Loan in India - EMI, Eligibility & Transfer Help | RupeBazaar.in',
      description: 'Plan home loan, balance transfer, top-up, construction, and renovation finance with RupeBazaar.in.'
    },
    'gold-loan.html': {
      title: 'Gold Loan in India - Quick Secured Loan Help | RupeBazaar.in',
      description: 'Gold loan guidance for secured borrowing, valuation, tenure, EMI planning, and assisted follow-up with RupeBazaar.in.'
    },
    'car-loan.html': {
      title: 'Car Loan in India - New & Used Car EMI Help | RupeBazaar.in',
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
    },
    'loan-consultant-indore.html': {
      title: 'Loan Consultant in Indore - Personal, Home & Business Loan Help | RupeBazaar.in',
      description: 'RupeBazaar.in loan consultant in Indore for personal loan, home loan, business loan, gold loan, EMI planning, and eligibility callback support.'
    },
    'personal-loan-agent-indore.html': {
      title: 'Personal Loan Agent in Indore - Eligibility & EMI Help | RupeBazaar.in',
      description: 'Get personal loan agent support in Indore with salary profile check, EMI estimate, document guidance, and assisted callback from RupeBazaar.in.'
    },
    'home-loan-agent-vijay-nagar-indore.html': {
      title: 'Home Loan Agent Vijay Nagar Indore - EMI & Transfer Help | RupeBazaar.in',
      description: 'Home loan agent near Vijay Nagar Indore for purchase, balance transfer, top-up, renovation, EMI planning, and eligibility enquiry support.'
    },
    'business-loan-consultant-indore.html': {
      title: 'Business Loan Consultant in Indore - MSME & Working Capital Help | RupeBazaar.in',
      description: 'Business loan consultant in Indore for MSME, working capital, shop expansion, cash flow, EMI planning, and assisted enquiry support.'
    },
    'personal-loan-eligibility-indore.html': {
      title: 'Personal Loan Eligibility in Indore - Income, EMI & Documents | RupeBazaar.in',
      description: 'Personal loan eligibility in Indore explained with income, credit profile, documents, existing EMI load, and callback support from RupeBazaar.in.'
    },
    'home-loan-emi-calculator-indore.html': {
      title: 'Home Loan EMI Calculator Indore - Affordability & Callback Help | RupeBazaar.in',
      description: 'Plan home loan EMI in Indore for purchase, transfer, top-up, and renovation with RupeBazaar.in calculator and callback support.'
    },
    'business-loan-documents-indore.html': {
      title: 'Business Loan Documents in Indore - MSME Loan Checklist | RupeBazaar.in',
      description: 'Business loan documents in Indore for MSME, working capital, shop expansion, GST, ITR, bank statement, and callback support.'
    },
    'gold-loan-per-gram-indore.html': {
      title: 'Gold Loan Per Gram in Indore - Value, Purity & Loan Help | RupeBazaar.in',
      description: 'Understand gold loan per gram factors in Indore including purity, weight, rate, LTV, tenure, and RupeBazaar.in callback support.'
    },
    'post.html': {
      title: 'Loan Insights India - Personal, Home, Business & Gold Loan Guides | RupeBazaar.in',
      description: 'Read RupeBazaar.in loan guides for India covering personal loan, home loan EMI, business loan documents, gold loan, eligibility, and FAQ.'
    },
    'personal-loan-kaise-milega.html': {
      title: 'Personal Loan Kaise Milega - Eligibility & Documents Guide | RupeBazaar.in',
      description: 'Personal loan kaise milega in India: eligibility, income, documents, EMI comfort, credit profile, and callback support from RupeBazaar.in.'
    },
    'home-loan-emi-kam-kaise-kare.html': {
      title: 'Home Loan EMI Kam Kaise Kare - EMI Planning Guide | RupeBazaar.in',
      description: 'Learn how to reduce home loan EMI in India using tenure, down payment, balance transfer, prepayment, and EMI planning.'
    },
    'business-loan-documents-checklist.html': {
      title: 'Business Loan Documents Checklist India - MSME Loan Guide | RupeBazaar.in',
      description: 'Business loan documents checklist for India: PAN, Aadhaar, bank statement, GST, ITR, business proof, and MSME callback support.'
    },
    'gold-loan-lene-se-pehle.html': {
      title: 'Gold Loan Lene Se Pehle Kya Check Kare - India Guide | RupeBazaar.in',
      description: 'Gold loan lene se pehle purity, net weight, LTV, interest, tenure, repayment terms, and valuation process samjhein.'
    },
    'loan-faq.html': {
      title: 'Loan FAQ India - Eligibility, EMI, Documents & Approval | RupeBazaar.in',
      description: 'RupeBazaar.in loan FAQ for India covering eligibility, documents, EMI calculator, credit score, approval time, and callback process.'
    },
    'personal-loan-eligibility-improve.html': {
      title: 'Improve Personal Loan Eligibility in India | RupeBazaar.in',
      description: 'Learn how income, CIBIL score, existing EMI, documents, and repayment behavior can improve personal loan eligibility.'
    },
    'cibil-score-loan-approval.html': {
      title: 'CIBIL Score and Loan Approval in India | RupeBazaar.in',
      description: 'Understand why CIBIL score matters for loan approval and how repayment behavior, income, and EMI burden affect options.'
    },
    'home-loan-documents-checklist.html': {
      title: 'Home Loan Documents Checklist India | RupeBazaar.in',
      description: 'Home loan documents checklist for salaried and self-employed borrowers including KYC, income proof, bank statement, and property papers.'
    },
    'business-loan-rejection-reasons.html': {
      title: 'Business Loan Rejection Reasons India | RupeBazaar.in',
      description: 'Understand common business loan rejection reasons like weak banking, missing documents, low turnover, poor CIBIL, and high EMI burden.'
    },
    'gold-loan-vs-personal-loan.html': {
      title: 'Gold Loan vs Personal Loan India | RupeBazaar.in',
      description: 'Compare gold loan and personal loan by security, CIBIL requirement, documents, risk, tenure, and best use cases.'
    },
    'indore-loan-services.html': {
      title: 'Loan Services in Indore | RupeBazaar.in',
      description: 'RupeBazaar.in loan services in Indore for personal loan, home loan, business loan, gold loan, EMI planning, and callback support.'
    },
    'privacy-policy.html': {
      title: 'Privacy Policy | RupeBazaar.in',
      description: 'Read how RupeBazaar.in handles loan enquiry data, callback details, and user information.'
    },
    'terms.html': {
      title: 'Terms of Use | RupeBazaar.in',
      description: 'Read RupeBazaar.in terms for loan information, calculator estimates, eligibility enquiries, and callback support.'
    },
    'disclaimer.html': {
      title: 'Disclaimer | RupeBazaar.in',
      description: 'RupeBazaar.in disclaimer for loan approval, rates, EMI calculator estimates, and lender policy.'
    }
  };
  var meta = map[page] || defaults;
  var title = meta.title || defaults.title;
  var description = meta.description || defaults.description;
  var noindexPages = ['elements.html', 'single-post.html'];

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
  upsertMeta('meta[name="robots"]', { name: 'robots', content: noindexPages.indexOf(page) !== -1 ? 'noindex, follow' : 'index, follow, max-image-preview:large' });
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
    telephone: '+919343153987',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shagun Tower, Vijay Nagar',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452010',
      addressCountry: 'IN'
    }
  });

  addJsonLd('rb-local-schema', {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'RupeBazaar.in',
    url: baseUrl,
    telephone: '+919343153987',
    email: 'support@rupebazaar.in',
    areaServed: ['India', 'Madhya Pradesh', 'Indore'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shagun Tower, Vijay Nagar',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452010',
      addressCountry: 'IN'
    },
    priceRange: 'Free initial enquiry',
    sameAs: [],
    serviceType: ['Personal Loan Assistance', 'Home Loan Assistance', 'Business Loan Assistance', 'Gold Loan Assistance', 'Loan EMI Calculator', 'Loan Eligibility Support'],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00'
    }]
  });

  function pageLabel(fileName) {
    var labels = {
      'index.html': 'Home',
      'loans.html': 'Loans',
      'personal-loan.html': 'Personal Loan',
      'home-loan.html': 'Home Loan',
      'business-loan.html': 'Business Loan',
      'gold-loan.html': 'Gold Loan',
      'car-loan.html': 'Car Loan',
      'education-loan.html': 'Education Loan',
      'calculators.html': 'Loan EMI Calculator',
      'eligibility.html': 'Loan Eligibility',
      'loan-faq.html': 'Loan FAQ',
      'loan-guides.html': 'Loan Guides',
      'post.html': 'Loan Insights',
      'contact.html': 'Contact',
      'about.html': 'About',
      'services.html': 'Services',
      'privacy-policy.html': 'Privacy Policy',
      'terms.html': 'Terms of Use',
      'disclaimer.html': 'Disclaimer'
    };
    return labels[fileName] || title.split('|')[0].trim();
  }

  addJsonLd('rb-breadcrumb-schema', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: page === 'index.html' ? [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }
    ] : [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: pageLabel(page), item: canonicalUrl }
    ]
  });

  if (page === 'eligibility.html' || page === 'contact.html' || page === 'loan-faq.html' || page.indexOf('-loan.html') !== -1 || page.indexOf('indore') !== -1) {
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
