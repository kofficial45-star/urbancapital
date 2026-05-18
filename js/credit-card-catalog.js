(function () {
  const cards = [
    {
      id: 'kotak-league-platinum',
      bank: 'Kotak',
      cardName: 'Kotak League Platinum Credit Card',
      tag: 'Lifestyle',
      theme: 'rb-cc-slate',
      short: 'Premium lifestyle card with reward points, PVR movie benefits, and fuel surcharge waiver.',
      bullets: ['Lifetime free card', 'Up to 8 reward points per Rs 150 spent', 'Up to 8 free PVR movie tickets annually'],
      benefits: [
        'Earn up to 8 reward points per Rs 150 on eligible lifestyle, travel, electronics, and departmental store spends.',
        'Base earning starts from 4 points per Rs 150 and can move higher with eligible spend categories.',
        'Spend Rs 1.25 lakh every six months and get up to 8 PVR tickets or 10,000 bonus points in a year.',
        '1% fuel surcharge waiver on eligible transactions from Rs 500 to Rs 4,000, capped as per issuer rules.',
        'Enjoy Visa offers on fuel transactions, subject to issuer and network terms.'
      ],
      fees: [['Joining Fee', 'Nil'], ['Annual Fee', 'Nil'], ['Card Type', 'Lifetime free, as per offer terms']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Salaried income: Rs 25,000 per month', 'Self-employed ITR: Rs 3 lakh+ per annum', 'Credit score: 700+', 'New-to-credit: Not allowed'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof'],
      note: 'No profit text, copy-link text, or sharing instructions are shown on RupeBazaar.'
    },
    {
      id: 'sbm-zet',
      bank: 'SBM Bank',
      cardName: 'SBM ZET Credit Card',
      tag: 'FD Backed',
      theme: 'rb-cc-violet',
      short: 'Lifetime-free FD-backed RuPay card for UPI and online shopping rewards.',
      bullets: ['Lifetime free card', 'Flat cashback on Amazon, Flipkart and more', 'Flat cashback on UPI payments'],
      benefits: [
        'Designed for customers who want a secured credit card backed by a fixed deposit.',
        'Flat cashback on eligible Amazon, Flipkart, Nykaa, Domino’s, and selected brand purchases.',
        'Cashback on eligible UPI payments through RuPay credit card UPI flow.',
        'Credit limit may be based on FD value, commonly up to around 90% subject to issuer policy.',
        'Useful for building credit history when regular unsecured cards are difficult to get.'
      ],
      fees: [['Joining Fee', 'Nil'], ['Annual Fee', 'Nil'], ['Minimum Funding', 'Rs 2,000 as shown in screenshots']],
      eligibility: ['Age: 21 to 65 years', 'FD/funding requirement applies', 'Approval depends on issuer checks and funding validation'],
      documents: ['PAN card', 'Aadhaar or valid address proof', 'Bank/KYC details as requested by issuer'],
      note: 'Availability can vary by state/UT and issuer policy.'
    },
    {
      id: 'sbm-novio',
      bank: 'SBM Bank',
      cardName: 'SBM Novio Credit Card',
      tag: 'UPI Rewards',
      theme: 'rb-cc-violet',
      short: 'FD-backed card with instant approval route and Novio Coin rewards on UPI spends.',
      bullets: ['Lifetime free card', 'Instant approval against FDs', 'Up to 10% Novio Coin rewards on UPI spends'],
      benefits: [
        'Lifetime-free structure with no joining fee in the shown offer flow.',
        'FD-backed approval path, useful for customers building credit profile.',
        'Earn Novio Coins on eligible UPI, wallet, travel, health, food, and lifestyle partner spends.',
        'Reward redemption can be used on eligible partner platforms subject to programme terms.',
        'Good fit for users who prefer UPI-led card usage.'
      ],
      fees: [['Joining Fee', 'Nil'], ['Annual Fee', 'Nil'], ['Minimum Funding', 'Rs 2,000 or issuer-defined FD requirement']],
      eligibility: ['Age: 21 to 65 years', 'Minimum funding/FD requirement applies', 'Physical card availability may depend on FD value', 'Issuer KYC and policy checks apply'],
      documents: ['PAN card', 'Aadhaar or valid address proof', 'Bank/KYC details requested by issuer'],
      note: 'Rewards and redemption partners can change as per SBM/Novio terms.'
    },
    {
      id: 'zagg-rupay',
      bank: 'Zagg',
      cardName: 'Zagg RuPay Credit Card',
      tag: 'Digital Payments',
      theme: 'rb-cc-blue',
      short: 'RuPay card built for digital payments, Zagg Coins, and UPI-linked card use.',
      bullets: ['Zero joining and annual fees', 'Earn Zagg Coins on spends via the app', 'Credit limit up to Rs 5,00,000 subject to policy'],
      benefits: [
        'Designed for UPI-first credit card users who want a digital payments card.',
        'Earn Zagg Coins on eligible spends and redeem them as per app rules.',
        'RuPay credit card can be linked to UPI where supported.',
        'Helpful for customers looking for a simple no-fee card experience.',
        'Credit limit and approval depend on eligibility, bureau profile, and issuer policy.'
      ],
      fees: [['Joining Fee', 'Nil'], ['Annual Fee', 'Nil'], ['Credit Limit', 'Up to Rs 5,00,000, subject to approval']],
      eligibility: ['Age: 21 to 65 years', 'Salaried or self-employed applicants allowed', 'Minimum income: Rs 25,000 per month', 'Credit score: 720+ preferred'],
      documents: ['PAN card', 'Last 3 months bank statement or income proof', 'Aadhaar or valid address proof'],
      note: 'Final limit and card approval depend on issuer policy.'
    },
    {
      id: 'sbi-cashback',
      bank: 'SBI Card',
      cardName: 'SBI Cashback Credit Card',
      tag: 'Cashback',
      theme: 'rb-cc-purple',
      short: 'Cashback-focused SBI card for online spends without merchant restrictions in the shown offer.',
      bullets: ['Cashback on online purchases', 'No merchant restrictions for online shopping', 'Cashback on offline transactions'],
      benefits: [
        '5% cashback on eligible online spends, subject to monthly caps and issuer exclusions.',
        '1% cashback on eligible offline transactions.',
        'No merchant restriction for online shopping as shown in the offer screenshots.',
        'Cashback is auto-credited to SBI Card account as per statement cycle.',
        'Good choice for regular online shoppers who want simple cashback.'
      ],
      fees: [['Joining Fee', 'Rs 999 + GST'], ['Annual Fee', 'Rs 999 + GST from second year'], ['Annual Fee Waiver', 'May be waived on spends of Rs 2,00,000 or more in the previous year']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Minimum income: Rs 30,000 per month', 'Credit score: 650+ with clean recent repayment track', 'New-to-credit: Allowed only for salaried applicants as per screenshot'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'Cashback caps, exclusions, and waiver conditions should be checked before applying.'
    },
    {
      id: 'yes-bank-pop-club',
      bank: 'YES Bank',
      cardName: 'Yes Bank Pop-Club Credit Card',
      tag: 'RuPay Rewards',
      theme: 'rb-cc-brown',
      short: 'RuPay card with POPcoins rewards on UPI and online shopping spends.',
      bullets: ['Lifetime free credit card', 'Earn POPcoins on POP UPI', 'Rewards on every Rs 100 spent'],
      benefits: [
        'Lifetime-free card structure shown in the screenshots.',
        'Earn POPcoins on every eligible online and offline transaction.',
        'Extra POPcoins on POP UPI and RuPay credit card UPI spends.',
        'Partner benefits across Zomato, Blinkit, Cleartrip, PharmEasy and similar categories as per terms.',
        'Useful for users who want UPI rewards with a RuPay credit card.'
      ],
      fees: [['Joining Fee', 'Nil'], ['Annual Fee', 'Nil'], ['Customer Type', 'Existing credit card users preferred as per screenshot']],
      eligibility: ['Age: 21 to 60 years', 'Employment: Salaried or self-employed', 'Credit score: 730+', 'New-to-credit: Not allowed', 'Existing credit card vintage and limit checks may apply'],
      documents: ['PAN card', 'Aadhaar number mandatory as address proof in screenshot', 'Income proof may not be required when approval is based on existing card vintage and limit'],
      note: 'Rewards, merchant list, and redemption value depend on YES Bank/POP terms.'
    },
    {
      id: 'axis-rewards-visa',
      bank: 'Axis Bank',
      cardName: 'Axis Rewards Visa Credit Card',
      tag: 'Rewards',
      theme: 'rb-cc-purple',
      short: 'Rewards card for apparel, department store spends, lounge access, and dining offers.',
      bullets: ['10X EDGE reward points on apparel', 'Domestic lounge access annually', 'Swiggy discount offers'],
      benefits: [
        'Earn accelerated EDGE reward points on eligible apparel and departmental store spends.',
        'Complimentary domestic airport lounge access per quarter, subject to spend and issuer terms.',
        'Food delivery and dining benefits through Axis Bank offer programmes.',
        'Welcome benefits and partner discounts may apply as per card approval and campaign.',
        'Useful for lifestyle and apparel shoppers.'
      ],
      fees: [['Joining Fee', 'Rs 1,000 + GST'], ['Annual Fee', 'Rs 1,000 + GST'], ['Waiver', 'Subject to issuer spend-based terms if available']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Salaried income: Rs 25,000 per month', 'Self-employed ITR: Rs 3,60,000+ per annum', 'Credit score: 736+', 'New-to-credit: Not allowed'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'All reward rates and caps are subject to Axis Bank terms.'
    },
    {
      id: 'indusind-tiger',
      bank: 'IndusInd Bank',
      cardName: 'IndusInd Tiger Credit Card',
      tag: 'Premium',
      theme: 'rb-cc-slate',
      short: 'Lifetime-free premium card with rewards, lounge access, and movie ticket benefit.',
      bullets: ['Up to 6 reward points per Rs 100 spent', 'Domestic and international lounge access', 'Movie ticket benefit on BookMyShow'],
      benefits: [
        'No joining or annual fee in the shown campaign.',
        'Earn up to 3 reward points for every Rs 100 spent, with accelerated earning on selected days/categories.',
        'Complimentary domestic and international lounge access through eligible network/pass programme.',
        'Complimentary movie ticket benefit on BookMyShow every six months in a calendar year.',
        'Lower forex markup benefit on international spends as per issuer terms.'
      ],
      fees: [['Card Type', 'Lifetime free card'], ['Joining Fee', 'Nil'], ['Annual Fee', 'Nil']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Salaried income: Rs 35,000 per month', 'Self-employed income: Rs 4,20,000 per annum', 'Credit score: 700+', 'New-to-credit: Not allowed'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'Lounge and movie benefits are subject to monthly/annual caps and issuer terms.'
    },
    {
      id: 'hdfc-irctc',
      bank: 'HDFC Bank',
      cardName: 'HDFC IRCTC Credit Card',
      tag: 'Travel',
      theme: 'rb-cc-sky',
      short: 'Travel card for IRCTC bookings, lounge access, and railway transaction benefits.',
      bullets: ['Reward points on IRCTC website', 'Reward points on other categories', 'Complimentary lounge/access benefits'],
      benefits: [
        '5 reward points per Rs 100 on IRCTC ticketing website and Rail Connect app.',
        '1 reward point per Rs 100 on eligible other spends.',
        'Complimentary access to select IRCTC Executive Lounge every year, capped quarterly as per issuer terms.',
        'Welcome gift voucher on IRCTC booking, subject to eligibility and activation.',
        'Railway transaction charge waiver on eligible IRCTC ticketing transactions.'
      ],
      fees: [['Joining Fee', 'Rs 500 + applicable taxes'], ['Annual Fee', 'Rs 500 + applicable taxes'], ['Renewal Fee Waiver', 'Spend Rs 1,50,000 or more before renewal date as per screenshot']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Salaried income: Rs 25,000 per month', 'Self-employed ITR: Rs 6 lakh+ per annum', 'Credit score: 750+', 'New-to-credit: Allowed for salaried and self-employed applicants as per screenshot'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'Travel rewards and lounge benefits can change as per HDFC Bank/IRCTC terms.'
    },
    {
      id: 'idfc-first-power-plus',
      bank: 'IDFC FIRST Bank',
      cardName: 'IDFC First Power Plus Credit Card',
      tag: 'Fuel',
      theme: 'rb-cc-slate',
      short: 'Fuel and UPI rewards card with HPCL savings, surcharge waiver, and lifestyle benefits.',
      bullets: ['Fuel savings up to 6.5%', 'Savings on FASTag recharge and utility spends', 'Rewards on UPI and retail spends'],
      benefits: [
        'Fuel savings on HPCL spends, with Payback reward and additional savings as per issuer terms.',
        'Fuel surcharge waiver on eligible fuel transactions.',
        'Rewards on UPI and retail spends for non-fuel and non-utility categories.',
        'Welcome benefits such as shopper voucher and cashback on first eligible UPI payment may apply.',
        'Complimentary roadside assistance and accidental/lost card liability cover as per issuer terms.'
      ],
      fees: [['Joining Fee', 'Rs 499 + GST'], ['Annual Fee', 'Rs 499 + GST'], ['Annual Fee Waiver', 'May be waived on spending Rs 1,50,000 in preceding year']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Salaried income: Rs 25,000 per month', 'Self-employed income: Rs 3,00,000 per annum', 'Credit score: 710+', 'New-to-credit: Not allowed'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'Fuel and FASTag benefits depend on eligible merchant/category codes.'
    },
    {
      id: 'axis-indian-oil-rupay',
      bank: 'Axis Bank',
      cardName: 'Axis Indian Oil RuPay Credit Card',
      tag: 'Fuel',
      theme: 'rb-cc-purple',
      short: 'Fuel-focused card for IOCL spends, surcharge waiver, online shopping, and RuPay UPI use.',
      bullets: ['Back on IOCL fuel spends', 'Fuel surcharge waiver', 'Back on online shopping'],
      benefits: [
        'IOCL fuel benefit through EDGE reward points on eligible fuel transactions.',
        '1% fuel surcharge waiver on eligible transactions from Rs 400 to Rs 5,000.',
        'Online shopping rewards on eligible spends, capped as per issuer terms.',
        'RuPay network support with UPI-linked credit card usage where supported.',
        'Dining, travel, Swiggy, Tira and other Axis Bank offers may apply as per campaign.'
      ],
      fees: [['Joining Fee', 'Rs 500 + GST, partially covered by welcome cashback as per screenshot'], ['Annual Fee', 'Rs 500 + GST from second year'], ['Annual Fee Waiver', 'May be waived on eligible annual spends as per issuer terms']],
      eligibility: ['Age: 21 to 65 years', 'Employment: Salaried or self-employed', 'Minimum monthly income: Rs 25,000 salaried or Rs 3,60,000 per annum self-employed', 'Credit score: 736+', 'New-to-credit: Not allowed'],
      documents: ['PAN card or Form 60', 'Aadhaar, passport, or utility bill as address proof', 'Bank statement or salary slips as income proof', 'Recent passport-sized photo'],
      note: 'Fuel reward value depends on IOCL spends, merchant category, caps, and billing cycle.'
    }
  ];

  const grid = document.querySelector('.rb-credit-card-grid');
  const detailsContainer = document.querySelector('#card-details .container');
  if (!grid || !detailsContainer) return;
  const header = document.querySelector('#cards .ve-section-header');

  function normalize(text) {
    return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function cardVisual(card) {
    return `
      <div class="rb-cc-visual ${card.theme}">
        <div class="rb-bank-chip">${card.bank}</div>
        <div class="rb-card-chip"></div>
        <div class="rb-card-infinity">${card.cardName.split(' ')[1] || 'Card'}</div>
        <div class="rb-card-wave"></div>
        <div class="rb-cc-ribbon">${card.cardName}</div>
        <ul>${card.bullets.map((item) => `<li>${item}</li>`).join('')}</ul>
      </div>`;
  }

  function listCard(card) {
    return `
      <article class="rb-cc-card">
        ${cardVisual(card)}
        <div class="rb-cc-content">
          <span class="rb-card-tag">${card.tag}</span>
          <h3>${card.cardName}</h3>
          <p>${card.short}</p>
          <div class="rb-cc-actions">
            <a href="#${card.id}" class="ve-btn-ghost">View Details</a>
            <a href="#" class="ve-btn-primary rb-apply-link" data-card="${card.cardName}">Apply Now</a>
          </div>
        </div>
      </article>`;
  }

  function feeRows(fees) {
    return fees.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('');
  }

  function listItems(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
  }

  function checkedItems(items) {
    return items.map((item) => `<li><i class="fa fa-check-circle"></i> ${item}</li>`).join('');
  }

  function detailPanel(card) {
    return `
      <article class="rb-card-detail-panel" id="${card.id}" data-card-detail="${normalize(card.cardName + ' ' + card.bank + ' ' + card.tag + ' ' + card.short)}">
        <div class="rb-card-detail-head">
          <div>
            <span class="rb-card-tag">${card.tag}</span>
            <h3>${card.cardName}</h3>
            <p>${card.short}</p>
          </div>
          <a href="#" class="ve-btn-primary rb-apply-link" data-card="${card.cardName}">Apply Now</a>
        </div>
        <div class="rb-detail-grid">
          <div><h4>Key Benefits</h4><ul class="ve-ca-list">${checkedItems(card.benefits)}</ul></div>
          <div><h4>Fees</h4><table class="rb-guide-table"><tbody>${feeRows(card.fees)}</tbody></table></div>
          <div><h4>Eligibility</h4><ul>${listItems(card.eligibility)}</ul></div>
          <div><h4>Documents Needed</h4><ul>${listItems(card.documents)}</ul></div>
        </div>
        <div class="rb-card-note"><strong>Note:</strong> ${card.note}</div>
      </article>`;
  }

  if (header && !document.querySelector('.rb-card-filterbar')) {
    header.insertAdjacentHTML('afterend', `
      <div class="rb-card-filterbar" aria-label="Credit card filters">
        <button type="button" class="active" data-filter="all">All Cards</button>
        <button type="button" data-filter="cashback">Cashback</button>
        <button type="button" data-filter="travel">Travel</button>
        <button type="button" data-filter="fuel">Fuel</button>
        <button type="button" data-filter="rupay">RuPay / UPI</button>
        <button type="button" data-filter="lifetime free">Lifetime Free</button>
        <input type="search" placeholder="Search cards, bank, benefit..." aria-label="Search credit cards">
      </div>
    `);
  }

  grid.insertAdjacentHTML('beforeend', cards.map(listCard).join(''));

  cards.forEach((card) => {
    const existing = document.getElementById(card.id);
    if (!existing) {
      detailsContainer.insertAdjacentHTML('beforeend', detailPanel(card));
    }
  });

  const count = document.querySelector('.rb-card-hero .rb-hero-panel strong');
  if (count) count.textContent = String(document.querySelectorAll('.rb-cc-card').length);

  document.querySelectorAll('.rb-cc-card').forEach((card) => {
    const text = normalize(card.textContent);
    card.setAttribute('data-card-search', text);
  });

  const filterbar = document.querySelector('.rb-card-filterbar');
  if (filterbar) {
    const input = filterbar.querySelector('input');
    const buttons = filterbar.querySelectorAll('button');
    let activeFilter = 'all';

    function applyFilter() {
      const query = normalize(input ? input.value : '');
      document.querySelectorAll('.rb-cc-card').forEach((card) => {
        const text = card.getAttribute('data-card-search') || normalize(card.textContent);
        const matchFilter = activeFilter === 'all' || text.indexOf(activeFilter) !== -1;
        const matchQuery = !query || text.indexOf(query) !== -1;
        card.style.display = matchFilter && matchQuery ? '' : 'none';
      });
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        activeFilter = button.getAttribute('data-filter') || 'all';
        buttons.forEach((item) => item.classList.toggle('active', item === button));
        applyFilter();
      });
    });
    if (input) input.addEventListener('input', applyFilter);
  }
})();
