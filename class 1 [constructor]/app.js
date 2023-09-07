function BankAccount({ customerName, balance = 0 }) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = (depositAmount) => {
    this.balance += +depositAmount;
  };

  this.withDraw = (withDrawAmount) => {
    this.balance -= +withDrawAmount;
  };
} 

// const mustafaAccount = new BankAccount({
//   customerName: "Mustafa",
//   balance: 20000,
// });
// console.log(mustafaAccount);

// mustafaAccount.deposit(2700);

// console.log(mustafaAccount);

// mustafaAccount.withDraw(700);

const accounts = [];

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const depositAmount = document.querySelector("#depositAmount");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount({
    customerName: customerName.value,
    balance: +balance.value,
  });
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = accounts.find(
    (acc) => acc.accountNumber === +accountNumber.value
  );

  account.deposit(+depositAmount.value);
  console.log(accounts)
});
