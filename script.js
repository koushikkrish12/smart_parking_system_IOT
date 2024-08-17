let slotCount = 0;
let irSensor1Occupied = false;
let irSensor2Occupied = false;
let smokeDetectorOk = true;

function updateDisplay() {
    document.getElementById("slotCount").textContent = slotCount;
    document.getElementById("irSensor1Button").textContent = irSensor1Occupied ? "Occupied" : "Vacant";
    document.getElementById("irSensor2Button").textContent = irSensor2Occupied ? "Occupied" : "Vacant";
    document.getElementById("smokeSensorButton").className = smokeDetectorOk ? "sensor-button ok" : "sensor-button alert";
    document.getElementById("smokeSensorButton").textContent = smokeDetectorOk ? "OK" : "Smoke Detected";
}

document.getElementById("irSensor1Button").addEventListener("click", function () {
    if (!irSensor1Occupied) {
        irSensor1Occupied = true;
        slotCount--;
    } else {
        irSensor1Occupied = false;
        slotCount++;
    }
    updateDisplay();
});

document.getElementById("irSensor2Button").addEventListener("click", function () {
    if (!irSensor2Occupied) {
        irSensor2Occupied = true;
        slotCount--;
    } else {
        irSensor2Occupied = false;
        slotCount++;
    }
    updateDisplay();
});

document.getElementById("smokeSensorButton").addEventListener("click", function () {
    smokeDetectorOk = !smokeDetectorOk;
    updateDisplay();
});

updateDisplay();
