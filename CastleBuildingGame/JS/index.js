var stonewalls = false;
var woodenwalls = false;
var squaretowers = false;
var circulartowers = false;


function woodenwalls {

    if (woodenwalls = true) {
        alert("You can only buy one set of walls!")
    }
    else {
        if (stonewalls = true) {
            removeStoneWalls()
        }
        else {
            //WOODEN WALLS APPEAR
        }
    }

}

function stonewalls {

    if (stonewalls = true) {
        alert("You can only buy one set of walls!")
    }
    else {
        if (woodenwalls = true) {
            removeWoodenWalls()
        }
        else {
            //WOODEN WALLS APPEAR
        }
    }

}