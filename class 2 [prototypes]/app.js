function BankAccount({ customerName, balance = 0 }) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }
  
  BankAccount.prototype.deposit = function (amount) {
    this.balance = amount   
  }

  const mustafaAccount = new BankAccount({customerName:'Mustafa'})

  mustafaAccount.deposit(2000)

  console.log(mustafaAccount)



