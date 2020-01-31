let myAcct = {
    name: 'James',
    expenses: 0,
    income: 0
};

// this is a references to the exact same object
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    console.log(account); // this will return the same thing as....
}
addExpense(myAcct, 2.50);
console.log(myAcct); // THIS!!!!!
