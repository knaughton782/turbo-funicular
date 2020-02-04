let myAcct = {
    name: 'James',
    expenses: 15,
    income: 25
};

// this is a references to the exact same object
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    return `expenses: ${account.expenses}`;
    //console.log(account); // this will return the same thing as....
    }; // console.log(myAcct); // THIS!!!!!


// addIncome - take in the account to manipulate and the amount of income
let addIncome = function(account, amount) {
    account.income = account.income + amount;
    return `income: ${account.income}`;
};

//resetAcct - reset income and expenses to 0
let resetAcct1 = function(account) {
    account.expenses = 0;
    account.income = 0;
    return `Total income: ${account.income}, Total expenses: ${account.expenses}`;
};
console.log(`testing ${myAcct.income} and ${myAcct.expenses}`);

//getAcctSummary - prints current details
let getAcctSummary = function(account) {
    let balance = account.income - account.expenses;
    return `${account.name} has $${balance}. Total income: ${account.income}, Total expenses: ${account.expenses}`;
};

let addExp = addExpense(myAcct, 2.50);
let addInc = addIncome(myAcct, 2000.50);
let reset = resetAcct1(myAcct);


console.log(addExp);
console.log(addInc);
console.log(reset);
addInc = addIncome(myAcct, 6000.50);
let acctSum = getAcctSummary(myAcct);
console.log(addInc);
console.log(acctSum);
console.log(reset);
console.log(myAcct);



let resetAcct = function(acct) {
    acct.income = 0;
    acct.expenses = 0;
  
}
resetAcct(myAcct)