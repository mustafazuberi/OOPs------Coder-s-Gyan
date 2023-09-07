class BankAccount {
  customerName;
  accountNumber;
  balance = 0;
  constructor(customerName, balance = 0) {
    this.accountNumber = Date.now();
    this.customerName = customerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += +amount;
  }

  withdraw(amount) {
    this.balance -= +amount;
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    this.balance += +amount;
  }
}

class SavingAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("Taking business loan ----- ", amount);
  }
}

const mustafaAccount = new BankAccount("Mustafa");
mustafaAccount.deposit(2000);
console.log(mustafaAccount);

const mustafaAccountC = new CurrentAccount("Mustafa");
mustafaAccountC.deposit(2000);
console.log(mustafaAccountC);

const rakeshAccount = new SavingAccount("Rakesh", 2300);
rakeshAccount.deposit(200);
console.log(rakeshAccount);
rakeshAccount.takeBusinessLoan(42000);
