function BankAccount({ customerName, balance = 0 }) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

const mustafaAccount = new BankAccount({ customerName: "Mustafa", balance: 20000 });
console.log(mustafaAccount)