const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-clear');
const confirmBtn = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

let totalExpenses = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

const presentToast =() => {
  const toast = document.createElement('ion-toast');
  toast.message = 'Please enter reason and amount!';
  toast.duration = 3000;

  document.body.appendChild(toast);
  return toast.present();
}

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
      enteredReason.trim().length <= 0 ||
      enteredAmount <= 0 ||
      enteredAmount.trim().length <= 0
  ) {
      presentToast(); //calling function
      return;
  }

  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': $' + enteredAmount;

  expensesList.appendChild(newItem);

  totalExpenses += +enteredAmount;
  totalExpensesOutput.textContent = totalExpenses;
  clear();
});

cancelBtn.addEventListener('click', clear);
