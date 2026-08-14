// Create an object with properties
// accountHolder
// balance
// Methods
// deposit(amount)
// withdraw(amount)
// checkBalance()
// Example
// deposit(500)
// Balance : 1500

let bank = {
    accountHolder : "Prabin",
    balance : 1000000,

    deposit : function(amount){
        this.balance+=amount;
        console.log("Deposit:",amount);
    },

    withdraw : function(amount){
        this.balance-=amount;
        console.log("Withdraw Amount:",amount);
    },

    checkBalance : function(amount){
        console.log("Balance:", this.balance);
    }
};

bank.deposit(500);
bank.withdraw(1000);
bank.checkBalance();