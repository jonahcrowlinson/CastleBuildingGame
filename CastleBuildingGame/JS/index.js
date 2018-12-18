var stonewalls = false;
var woodenwalls = false;
var squaretowers = false;
var circulartowers = false;

var balanceheading = document.getElementById("balance")
var balance = "1000"
setBalance()


function woodenwalls() {

    if (woodenwalls = true) {
        alert("You can only buy one set of walls!")
    }
    else {
        if (stonewalls == true) {
            removeStoneWalls()
            //WOODEN WALLS APPEAR
            balance=balance-100
        }
        else {
            //WOODEN WALLS APPEAR
        }
    }

}

function stonewalls() {

    if (stonewalls == true) {
        alert("You can only buy one set of walls!")
    }
    else {
        if (woodenwalls == true) {
            removeWoodenWalls()
        }
        else {
            //WOODEN WALLS APPEAR
        }
    }

}

function setBalance() {
    balanceheading.innerHTML = "Balance: "+balance
}