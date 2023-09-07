class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;
  constructor(customerName, balance = 0) {
    this.accountNumber = Date.now();
    this.customerName = customerName;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += +amount;
  }

  withdraw(amount) {
    this.#balance -= +amount;
  }

  set balance(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid number.");
    }
    this.#balance = amount;
  }

  get balance() {
    return this.#balance;
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  #calculateInterest(amount) {
    console.log("calculating interest", amount);
  }

  takeBusinessLoan(amount) {
    this.#calculateInterest(amount)
    console.log("taking business Loan", amount);
  }
}

const rakeshAccount = new CurrentAccount("Rakesh", 2300);

rakeshAccount.takeBusinessLoan(22)

console.log(rakeshAccount);


