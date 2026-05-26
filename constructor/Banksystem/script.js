// Build a Bank Account system using prototypes.

function BankAccount(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
}

BankAccount.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        console.log("Insufficient balance");
    } else {
        this.balance -= amount;
        console.log(amount + " withdrawn");
    }
};

const user1 = new BankAccount('JAy', 1000);
const user2 = new BankAccount('go', 1000);

BankAccount.prototype.deposit = function (amount){
    this.balance += amount;
    return amount +" " +"deposited"
}

BankAccount.prototype.getBalance = function (){
   
    return  "Balance : "+ " " + this.balance 
}

console.log(user1.deposit(2000))
console.log(user2.deposit(4000))
console.log(user1.withdraw(2000))
console.log(user1.getBalance())
console.log(user2.getBalance())