//Create name value pairing
//This was updated by Isaac Morallo

const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-clear');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
//const alertInputControl = document.querySelector('ion-alert'); 

let myTotalExpenses = 0;

const clear = () =>{
    reasonInput.value = '';
    amountInput.value = '';
};

const inputAlert =() => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Warning!';
    //alert.subHeader = 'Input Alert...';
    alert.message = 'Please enter reason and amount!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    alert.present();
  }


cancelButton.addEventListener('click', clear);

//Add Expenses button event
addButton.addEventListener('click', () => {
    const reasonEntered =  reasonInput.value;
    const amountEntered = amountInput.value;

    if(reasonEntered.trim().length <= 0 || amountEntered <= 0 || amountEntered.trim().length <= 0){
        inputAlert();
        return;
    }
    //console.log(reasonEntered, amountEntered);

    const newExpenses = document.createElement('ion-item');
    newExpenses.textContent = reasonEntered + ': P' + amountEntered;
    expensesList.appendChild(newExpenses);

    myTotalExpenses += +amountEntered;
    totalExpensesOutput.textContent = myTotalExpenses;
     console.log(myTotalExpenses);

    clear();
});

