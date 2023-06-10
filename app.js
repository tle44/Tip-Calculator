function getEle(id) {
    return document.getElementById(id);
}

//function to calculate tip and total

function calculateTip() {
    var bill = parseFloat(getEle("bill").value);
    var tip = parseFloat(getEle("select_Tip").value);
    var numOfPeople = parseFloat(getEle("numberOfPeople").value);

    //validate
    if (isNaN(bill) || isNaN(tip) || isNaN(numOfPeople)) {
        alert("Please enter your bill and select tip%");
        return;
    }
    //check number of people
    var perPersonEle = document.getElementsByClassName("perPerson");
    if (numOfPeople <= 1) {
        for (var i = 0; i < perPersonEle.length; i++) {
            perPersonEle[i].style.display = "none";
        }
    } else {
        for (var i = 0; i < perPersonEle.length; i++) {
            perPersonEle[i].style.display = "block";
        }
    }

    //calculate
    var tipAmount = (bill * tip) / numOfPeople;
    var total = bill + tipAmount;

    //print tips and total
    getEle("pay_tip").innerHTML = "$" + tipAmount.toFixed(2);
    getEle("pay_total").innerHTML = "$" + total.toFixed(2);
}

// =================================function main==================================
//hidden perPerson
var perPersonEle = document.getElementsByClassName("perPerson");
for (var i = 0; i < perPersonEle.length; i++) {
    perPersonEle[i].style.display = "none";
}
//call calculateTip function
getEle("calculate_btn").onclick = function () {
    calculateTip();
};
