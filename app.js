// === DOM ELEMENTS ===
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip');
const customTipInput = document.getElementById('custom_tip');
const numPeopleInput = document.getElementById('pple');
const tipAmountOutput = document.getElementById('tip_amount');
const totalOutput = document.getElementById('total');
const resetButton = document.getElementById('reset');
const themeToggle = document.getElementById('themeToggle');
const transactionLog = document.getElementById('transaction_log');

let debounceTimer = null;

// === EVENT LISTENERS ===
[billInput, numPeopleInput, customTipInput].forEach(input =>
  input.addEventListener('input', handleInputChange)
);

customTipInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleInputChange();
});

tipButtons.forEach(btn =>
  btn.addEventListener('click', e => {
    tipButtons.forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    customTipInput.value = '';
    handleInputChange();
  })
);

resetButton.addEventListener('click', resetCalculator);
themeToggle.addEventListener('click', toggleDarkMode);

// === CORE FUNCTIONS ===
function handleInputChange() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(numPeopleInput.value);
  const customTip = parseFloat(customTipInput.value);
  const activeButton = document.querySelector('.tip.active');

  let tipPercent = !isNaN(customTip) ? customTip :
                   activeButton ? parseFloat(activeButton.textContent) : NaN;

  if (isNaN(bill) || isNaN(people) || people <= 0 || isNaN(tipPercent)) return;

  const tipAmount = (bill * tipPercent / 100) / people;
  const totalAmount = (bill / people) + tipAmount;

  tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;
  totalOutput.textContent = `$${totalAmount.toFixed(2)}`;

  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    logTransaction(bill, tipPercent, people, tipAmount, totalAmount);
  }, 10000);
}

function resetCalculator() {
  billInput.value = '';
  customTipInput.value = '';
  numPeopleInput.value = '';
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipAmountOutput.textContent = '$0.00';
  totalOutput.textContent = '$0.00';
}

// === TRANSACTION LOGGING ===
function logTransaction(bill, tip, people, tipAmount, totalAmount) {
  const newEntry = {
    bill,
    tip,
    people,
    tipAmount: tipAmount.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    time: new Date().toLocaleString()
  };

  let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  transactions.unshift(newEntry);
  transactions = transactions.slice(0, 5);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  renderTransactionLog(transactions);
}

function renderTransactionLog(transactions) {
  transactionLog.innerHTML = '';
  transactions.forEach(tx => {
    const entry = document.createElement('div');
    entry.className = 'transaction-entry';
    entry.innerHTML = `
      <p><strong>${tx.time}</strong></p>
      <p>Bill: $${tx.bill} | Tip: ${tx.tip}% | People: ${tx.people}</p>
      <p>Tip/person: $${tx.tipAmount} | Total/person: $${tx.totalAmount}</p>
    `;
    transactionLog.appendChild(entry);
  });
}

// === THEME ===
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

function initializeTheme() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
}

function initializeApp() {
  initializeTheme();
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  renderTransactionLog(transactions);
}

initializeApp();
