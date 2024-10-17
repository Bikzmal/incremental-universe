import { Planck, Quark } from "./classes.js";

//--------------------------------------------------- DO NOT TOUCH

let uniPoints = 0;
let uniPointsElement;

let updateRatePerSecond = 30;
let updateRate = 1 / updateRatePerSecond * 1000;

let planck = new Planck(0, 1.1);
let quark = new Quark(100, 1.2);

//--------------------------------------------------- BUYERS

function buyPlanck() {
    uniPoints -= planck.inc(uniPoints, 1);

    updateHtml();
} document.getElementById("buyPlanckButton").addEventListener("click", buyPlanck);

function buyQuark() {
    uniPoints -= quark.inc(uniPoints, 1);

    updateHtml();
} document.getElementById("buyQuarkButton").addEventListener("click", buyQuark);

//--------------------------------------------------- UPDATER

function updateHtml() {
    uniPointsElement.innerHTML = Math.floor(uniPoints);
    document.getElementById("buyPlanckButton").innerHTML = "Buy a planck (" + Math.floor(planck.amount) + ") -> " + Math.floor(planck.price);
    document.getElementById("buyQuarkButton").innerHTML = "Buy a quark (" + Math.floor(quark.amount) + ") -> " + Math.floor(quark.price);
}

//--------------------------------------------------- MAIN LOOP

function update() {
    if (uniPointsElement == null) {
        uniPointsElement = document.getElementById("uniPoints");
    }

    planck.inc(null, quark.amount / updateRatePerSecond);
    uniPoints += planck.earned() / updateRatePerSecond;

    updateHtml();
} setInterval(update, updateRate);