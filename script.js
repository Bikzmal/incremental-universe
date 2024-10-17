let uniPoints = 0;
let uniPointsElement;

let updateRatePerSecond = 30;
let updateRate = 1 / updateRatePerSecond * 1000;

class Planck {
    constructor(price, pricemul) {
        this.price = price;
        this.pricemul = pricemul;
    }
}

function buyPlanck() {
    planckAmount++;

    if (planckPrice < 2) {
        planckPrice++;
    } else {
        planckPrice = Math.pow(planckPrice, priceMul);
        planckPrice = Math.ceil(planckPrice);
    }

    document.getElementById("buyPlanckButton").innerHTML = "Buy a planck (" + planckAmount + ") -> " + planckPrice;
}

function updateUniPoints() {
    if (uniPointsElement == null) {
        uniPointsElement = document.getElementById("uniPoints");
    }

    uniPoints += planckAmount / updateRatePerSecond;

    uniPointsElement.innerHTML = Math.floor(uniPoints);
} this.setInterval(updateUniPoints, updateRate);