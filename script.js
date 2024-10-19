import { Upgrader } from "./classes.js";

//--------------------------------------------------- INITIAL SETUP

let uniPoints = 1;
let uniPointsElement;
const updateRatePerSecond = 30;
const updateRate = (1 / updateRatePerSecond) * 1000;

let now, before = Date.now();

// List of all upgrades
const upgrades = {
    planck: new Upgrader('Planck', Math.pow(10, 0)),
    quark: new Upgrader('Quark', Math.pow(10, 2)),
    electron: new Upgrader('Electron', Math.pow(10, 4)),
    neutrino: new Upgrader('Neutrino', Math.pow(10, 6)),
    photon: new Upgrader('Photon', Math.pow(10, 8)),
    proton: new Upgrader('Proton', Math.pow(10, 10)),
    neutron: new Upgrader('Neutron', Math.pow(10, 12)),
    atom: new Upgrader('Atom', Math.pow(10, 14)),
    molecule: new Upgrader('Molecule', Math.pow(10, 16)),
    virus: new Upgrader('Virus', Math.pow(10, 18)),
};

// Get button elements
const buttons = {
    planck: document.getElementById("buyPlanckButton"),
    quark: document.getElementById("buyQuarkButton"),
    electron: document.getElementById("buyElectronButton"),
    neutrino: document.getElementById("buyNeutrinoButton"),
    photon: document.getElementById("buyPhotonButton"),
    proton: document.getElementById("buyProtonButton"),
    neutron: document.getElementById("buyNeutronButton"),
    atom: document.getElementById("buyAtomButton"),
    molecule: document.getElementById("buyMoleculeButton"),
    virus: document.getElementById("buyVirusButton"),
};

//--------------------------------------------------- EVENT LISTENERS

Object.keys(upgrades).forEach((upgradeKey) => {
    buttons[upgradeKey].addEventListener('click', () => buy(upgrades[upgradeKey]));
});

//--------------------------------------------------- BUY FUNCTION

function buy(upgrader) {
    uniPoints -= upgrader.inc(uniPoints, 1);
    updateHtml();
}

//--------------------------------------------------- UPDATE HTML

function updateHtml() {
    uniPointsElement.innerHTML = Math.trunc(uniPoints).toLocaleString('en-US');
    Object.keys(upgrades).forEach((upgradeKey) => {
        buttons[upgradeKey].innerHTML = upgrades[upgradeKey].generateHtml();
    });
}

//--------------------------------------------------- MAIN LOOP

function update() {
    if (uniPointsElement == null) {
        uniPointsElement = document.getElementById("uniPoints");
    }

    now = Date.now();
    const elapsed = now - before;
    const elapsedSeconds = elapsed / 1000;

    // Increment upgrades over time
    upgrades.planck.inc(null, upgrades.quark.earned() * elapsedSeconds);
    upgrades.quark.inc(null, upgrades.electron.earned() * elapsedSeconds);
    upgrades.electron.inc(null, upgrades.neutrino.earned() * elapsedSeconds);
    upgrades.neutrino.inc(null, upgrades.photon.earned() * elapsedSeconds);
    upgrades.photon.inc(null, upgrades.proton.earned() * elapsedSeconds);
    upgrades.proton.inc(null, upgrades.neutron.earned() * elapsedSeconds);
    upgrades.neutron.inc(null, upgrades.atom.earned() * elapsedSeconds);
    upgrades.atom.inc(null, upgrades.molecule.earned() * elapsedSeconds);
    upgrades.molecule.inc(null, upgrades.virus.earned() * elapsedSeconds);

    uniPoints += upgrades.planck.earned() * elapsedSeconds;

    updateHtml();
    before = Date.now();
}

setInterval(update, updateRate);