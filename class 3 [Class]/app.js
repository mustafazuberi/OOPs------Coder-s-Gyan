class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, accountNumber, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    this.balance += +amount
  }

  withdraw(amount) {
    this.balance -= +amount
  }
}

const mustafaAccount = new BankAccount("Mustafa Zuberi", 42000);

// 
console.log(mustafaAccount)

// 
mustafaAccount.deposit(300)
console.log(mustafaAccount)

// 
mustafaAccount.withdraw(400)
console.log(mustafaAccount)








