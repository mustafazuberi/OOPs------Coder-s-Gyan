function BankAccount({ customerName, balance = 0 }) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
  this.balance += +amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= +amount;
};







function CurrentAccount({ customerName, balance = 0 }) {
  BankAccount.call(this, {customerName, balance})
  this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype)
CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  this.balance += +amount;
};





   





function SavingAccount({ customerName, balance = 0 }) {
  BankAccount.call(this, {customerName, balance})
  this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype)
SavingAccount.prototype.takeBusinessLoan = function (amount) {
  console.log('Taking business loan ----- ',amount)
};







// -----------------------------

const mustafaAccount = new BankAccount({ customerName: "Mustafa" });
mustafaAccount.deposit(2000);
console.log(mustafaAccount);

const mustafaAccountC = new CurrentAccount({ customerName: "Mustafa" });
mustafaAccountC.deposit(2000);
console.log(mustafaAccountC);


const rakeshAccount  = new SavingAccount({customerName:'Rakesh'})
console.log(rakeshAccount)
rakeshAccount.takeBusinessLoan(42000)

// const mustafaAccountS = new SavingAccount({ customerName: "Mustafa" });
// mustafaAccountS.deposit(2000);
// console.log(mustafaAccountS);
