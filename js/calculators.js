(function () {
  var loanTypeButtons = document.querySelectorAll('.ve-loan-type-pill');
  var tenureModeButtons = document.querySelectorAll('.ve-tenure-mode');
  var bankChips = document.querySelectorAll('.ve-bank-chip');
  var quickAmountButtons = document.querySelectorAll('.ve-quick-amount');
  var amountRange = document.getElementById('loanAmountRange');
  var rateRange = document.getElementById('interestRateRange');
  var tenureRange = document.getElementById('loanTenureRange');

  if (!amountRange || !rateRange || !tenureRange) return;

  var currentLoanType = 'personal';
  var currentTenureMode = 'years';

  var loanConfigs = {
    personal: { title: 'Personal Loan', amountMin: 50000, amountMax: 2500000, amountStep: 50000, amountDefault: 500000, rateMin: 8, rateMax: 30, rateDefault: 10.5, tenureMin: 1, tenureMax: 10, tenureDefault: 3, tenureMinLabel: '1Y', tenureMaxLabel: '10Y' },
    home: { title: 'Home Loan', amountMin: 500000, amountMax: 10000000, amountStep: 100000, amountDefault: 2500000, rateMin: 7, rateMax: 15, rateDefault: 8.5, tenureMin: 5, tenureMax: 30, tenureDefault: 20, tenureMinLabel: '5Y', tenureMaxLabel: '30Y' },
    business: { title: 'Business Loan', amountMin: 100000, amountMax: 5000000, amountStep: 50000, amountDefault: 1000000, rateMin: 9, rateMax: 24, rateDefault: 13.5, tenureMin: 1, tenureMax: 15, tenureDefault: 5, tenureMinLabel: '1Y', tenureMaxLabel: '15Y' },
    gold: { title: 'Gold Loan', amountMin: 50000, amountMax: 3000000, amountStep: 50000, amountDefault: 300000, rateMin: 7, rateMax: 18, rateDefault: 9.2, tenureMin: 3, tenureMax: 36, tenureDefault: 12, tenureMinLabel: '3M', tenureMaxLabel: '36M', defaultMode: 'months' },
    car: { title: 'Car Loan', amountMin: 100000, amountMax: 3000000, amountStep: 50000, amountDefault: 800000, rateMin: 7, rateMax: 18, rateDefault: 9.4, tenureMin: 1, tenureMax: 7, tenureDefault: 5, tenureMinLabel: '1Y', tenureMaxLabel: '7Y' },
    education: { title: 'Education Loan', amountMin: 100000, amountMax: 5000000, amountStep: 50000, amountDefault: 1200000, rateMin: 8, rateMax: 16, rateDefault: 10.2, tenureMin: 1, tenureMax: 15, tenureDefault: 7, tenureMinLabel: '1Y', tenureMaxLabel: '15Y' }
  };

  function formatCurrency(number) {
    return '₹' + Number(number).toLocaleString('en-IN');
  }

  function formatCompactAmount(number) {
    if (number >= 10000000) return (number / 10000000) + 'Cr';
    if (number >= 100000) return (number / 100000) + 'L';
    if (number >= 1000) return (number / 1000) + 'K';
    return String(number);
  }

  function calculateEMI(principal, annualRate, tenure, mode) {
    var months = mode === 'years' ? tenure * 12 : tenure;
    var monthlyRate = annualRate / 12 / 100;
    if (!monthlyRate) {
      var plainEmi = principal / months;
      return {
        emi: plainEmi,
        totalAmount: plainEmi * months,
        interestAmount: 0
      };
    }
    var emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    var totalAmount = emi * months;
    var interestAmount = totalAmount - principal;
    return {
      emi: emi,
      totalAmount: totalAmount,
      interestAmount: interestAmount
    };
  }

  function setQuickAmountActive() {
    quickAmountButtons.forEach(function (button) {
      button.classList.toggle('active', Number(button.dataset.amount) === Number(amountRange.value));
    });
  }

  function updateDisplays() {
    var principal = Number(amountRange.value);
    var annualRate = Number(rateRange.value);
    var tenure = Number(tenureRange.value);
    var result = calculateEMI(principal, annualRate, tenure, currentTenureMode);

    document.getElementById('loanAmountDisplay').textContent = formatCurrency(principal);
    document.getElementById('interestRateDisplay').textContent = annualRate.toFixed(1);
    document.getElementById('loanTenureDisplay').textContent = tenure;
    document.getElementById('monthlyEmiDisplay').textContent = formatCurrency(Math.round(result.emi));
    document.getElementById('principalDisplay').textContent = formatCurrency(principal);
    document.getElementById('interestAmountDisplay').textContent = formatCurrency(Math.round(result.interestAmount));
    document.getElementById('totalAmountDisplay').textContent = formatCurrency(Math.round(result.totalAmount));
    setQuickAmountActive();
  }

  function syncLoanType(type) {
    var config = loanConfigs[type];
    currentLoanType = type;
    currentTenureMode = config.defaultMode || 'years';

    loanTypeButtons.forEach(function (button) {
      button.classList.toggle('active', button.dataset.loanType === type);
    });
    tenureModeButtons.forEach(function (button) {
      button.classList.toggle('active', button.dataset.mode === currentTenureMode);
    });

    document.getElementById('calculatorTitleLoan').textContent = config.title;
    document.getElementById('calculatorSubheading').textContent = 'Calculate Your ' + config.title + ' EMI';

    amountRange.min = config.amountMin;
    amountRange.max = config.amountMax;
    amountRange.step = config.amountStep;
    amountRange.value = config.amountDefault;

    rateRange.min = config.rateMin;
    rateRange.max = config.rateMax;
    rateRange.step = 0.1;
    rateRange.value = config.rateDefault;

    if (currentTenureMode === 'years') {
      tenureRange.min = config.tenureMin;
      tenureRange.max = config.tenureMax;
      tenureRange.step = 1;
      tenureRange.value = config.tenureDefault;
      document.getElementById('tenureMinLabel').textContent = config.tenureMinLabel;
      document.getElementById('tenureMaxLabel').textContent = config.tenureMaxLabel;
    } else {
      tenureRange.min = config.tenureMin;
      tenureRange.max = config.tenureMax;
      tenureRange.step = 1;
      tenureRange.value = config.tenureDefault;
      document.getElementById('tenureMinLabel').textContent = config.tenureMinLabel;
      document.getElementById('tenureMaxLabel').textContent = config.tenureMaxLabel;
    }

    document.getElementById('loanAmountMaxLabel').textContent = formatCompactAmount(config.amountMax);
    document.getElementById('interestMinLabel').textContent = config.rateMin + '%';
    document.getElementById('interestMaxLabel').textContent = config.rateMax + '%';
    updateDisplays();
  }

  loanTypeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      syncLoanType(button.dataset.loanType);
    });
  });

  tenureModeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (button.dataset.mode === currentTenureMode) return;
      currentTenureMode = button.dataset.mode;
      tenureModeButtons.forEach(function (item) {
        item.classList.toggle('active', item === button);
      });
      if (currentTenureMode === 'months') {
        tenureRange.min = 3;
        tenureRange.max = 360;
        tenureRange.value = Math.min(Number(tenureRange.value) * 12, 360);
        document.getElementById('tenureMinLabel').textContent = '3M';
        document.getElementById('tenureMaxLabel').textContent = '360M';
      } else {
        var config = loanConfigs[currentLoanType];
        tenureRange.min = config.tenureMin;
        tenureRange.max = config.tenureMax;
        tenureRange.value = Math.max(Math.round(Number(tenureRange.value) / 12), Number(config.tenureMin));
        document.getElementById('tenureMinLabel').textContent = config.tenureMinLabel;
        document.getElementById('tenureMaxLabel').textContent = config.tenureMaxLabel;
      }
      updateDisplays();
    });
  });

  bankChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      bankChips.forEach(function (item) { item.classList.remove('active'); });
      chip.classList.add('active');
    });
  });

  quickAmountButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      amountRange.value = Number(button.dataset.amount);
      updateDisplays();
    });
  });

  [amountRange, rateRange, tenureRange].forEach(function (input) {
    input.addEventListener('input', updateDisplays);
  });

  syncLoanType('personal');
})();
