import { Planck, Quark } from "./classes.js";

//--------------------------------------------------- DO NOT TOUCH

let uniPoints = 0;
let uniPointsElement;

let updateRatePerSecond = 30;
let updateRate = 1 / updateRatePerSecond * 1000;

let now, before = new Date();

let planck = new Planck(0, 1.1);
let quark = new Quark(100, 1.2);
/*
Electron
Neutrino
Photon
Proton
Neutron
Atom
Molecule
Virus
*/

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

    now = Date.now();
    let elapsed = now - before;
    let elapsedSeconds = elapsed / 1000;

    if (elapsed > 100) {
        console.log(elapsedSeconds);
        
        planck.inc(null, quark.amount * elapsedSeconds);
        uniPoints += planck.earned() * elapsedSeconds;
    } else {
        planck.inc(null, quark.amount / updateRatePerSecond);
        uniPoints += planck.earned() / updateRatePerSecond;
    }

    updateHtml();

    before = Date.now();
} setInterval(update, updateRate);