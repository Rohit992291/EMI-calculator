function updateAmount() {
    document.getElementById("txtamount").value = document.getElementById("range1").value;
}

function updateYears() {
    document.getElementById("txtyear").value = document.getElementById("rangerate").value;
}

function updateInterest() {
    document.getElementById("txtinterest").value = document.getElementById("ratechange").value;
}

function calculate() {
    var p = parseInt(document.getElementById("txtamount").value);
    var n = parseInt(document.getElementById("txtyear").value) * 12;
    var r = parseFloat(document.getElementById("txtinterest").value) / 12 / 100;

    var emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    document.getElementById("result").innerHTML = "Your monthly EMI is <b>&#8377;" + emi.toFixed(2) + "</b>";
}
function  amounttextboxchanged(){
    document.getElementById("range1").value = document.getElementById("txtamount").value;
}
function yeartextboxchanged(){
    document.getElementById("rangerate").value = document.getElementById("txtyear").value;
}
function ratetextboxchanged(){
    document.getElementById("ratechange").value = document.getElementById("txtinterest").value;
}