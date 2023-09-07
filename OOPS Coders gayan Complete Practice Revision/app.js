// function BankAccount(customerName, balance) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }
// BankAccount.prototype.deposit = function (amount) {
//   this.balance += +amount;
// };
// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= +amount;
// };

// function CurrentAccount(customerName, balance){
//     BankAccount.call(this,customerName, balance)
//     this.transictionLimit = 5000
// }
// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// const mustafaAccount = new BankAccount("Mustafa", 321);
// const mustafaAccount2 = new BankAccount("Mustafa", 321);
// const mustafaAccount3 = new CurrentAccount("Mustafa", 321);
// mustafaAccount.deposit(21);
// console.log(mustafaAccount);
// console.log(mustafaAccount2);
// console.log(mustafaAccount3);
// mustafaAccount3.deposit(321312)

class BankAccount {
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount) {
    this.balance += +amount;
  }

  withdraw(amount) {
    this.balance -= +amount;
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.transictionLimit = 5000;
  }

  takeBusinessLoan(amount){
    console.log('taking Business loan ---- ',amount)
  }
}

const mustafaAccount = new BankAccount("Mustafa", 300);
const mustafaAccount2 = new CurrentAccount("Mustafa", 300);
mustafaAccount.deposit(21);
// console.log(mustafaAccount);
console.log(mustafaAccount2);
mustafaAccount2.deposit(3200)
mustafaAccount2.takeBusinessLoan(3200)





