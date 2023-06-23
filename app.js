// Get the required elements from the DOM
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip');
const customTipInput = document.getElementById('custom_tip');
const numPeopleInput = document.getElementById('pple');
const tipAmountOutput = document.getElementById('tip_amount');
const totalOutput = document.getElementById('total');
const resetButton = document.getElementById('reset');

// Add event listeners to calculate the tip and total amount
billInput.addEventListener('input', calculateTip);
tipButtons.forEach(button => button.addEventListener('click', selectTip));
customTipInput.addEventListener('input', calculateTip);
numPeopleInput.addEventListener('input', calculateTip);
resetButton.addEventListener('click', resetCalculator);

// Function to calculate the tip and total amount
function calculateTip() {
  const billAmount = parseFloat(billInput.value);
  const numPeople = parseFloat(numPeopleInput.value);

  // Calculate the selected tip percentage
  let tipPercentage;
  if (this.id === 'custom_tip') {
    tipPercentage = parseFloat(customTipInput.value) || 0;
  } else {
    tipPercentage = parseFloat(this.textContent) || 0;
  }

  // Calculate the tip amount per person
  const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople || 0;
  tipAmountOutput.textContent = `$${tipAmount.toFixed(2)}`;

  // Calculate the total amount per person
  const totalAmount = (billAmount / numPeople) + tipAmount || 0;
  totalOutput.textContent = `$${totalAmount.toFixed(2)}`;
}

// Function to select the tip button and update the custom tip input
function selectTip() {
  tipButtons.forEach(button => button.classList.remove('active'));
  this.classList.add('active');
  customTipInput.value = '';
  calculateTip.call(this);
}

// Function to reset the calculator
function resetCalculator() {
  billInput.value = '';
  tipButtons.forEach(button => button.classList.remove('active'));
  customTipInput.value = '';
  numPeopleInput.value = '';
  tipAmountOutput.textContent = '$0.00';
  totalOutput.textContent = '$0.00';
}
