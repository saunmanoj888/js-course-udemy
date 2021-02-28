let myAccount = {
    name: 'John',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let accountSummary = function(account) {
    let balance = account.income - account.expenses
    return `You have a balance of $${balance}`
}

addExpense(myAccount, 100);
addIncome(myAccount, 1000);

console.log(accountSummary(myAccount));
