function checkbattery() {
  const battliquid = document.getElementById("liquid");

  const battpercentage = document.querySelector("h1");

  const icon = document.querySelector("i");

  let batterydetails = navigator.getBattery();

  batterydetails.then((batt) => {
    console.log(batt);
    function updatebatteryy() {
      let level = Math.floor(batt.level * 100);
      battliquid.style.height = `${parseInt(batt.level * 100)}%`;
      battpercentage.innerHTML = `${level} %`;
      console.log(level);
      if (batt.charging) {
        document.querySelector("span").innerHTML = "Charging...";
        document.querySelector("span").style.display = "block";
        icon.style.display = "none";
      }
      if (!batt.charging) {
        document.querySelector("span").style.display = "none";
        icon.style.display = "block";
      }
      if (level <= 20) {
        battliquid.classList.remove("green", "yellow", "orange");
        battliquid.classList.add("red");
        icon.style.display = "block";
      }
      if (level > 21 && level < 40) {
        battliquid.classList.remove("red", "yellow", "green");
        battliquid.classList.add("orange");
      }
      if (level > 41 && level < 79) {
        battliquid.classList.remove("red", "green", "orange");
        battliquid.classList.add("yellow");
      }
      if (level > 80) {
        battliquid.classList.add("green");
        battliquid.classList.remove("red", "yellow", "orange");
      }
    }
    updatebatteryy();
    batt.addEventListener("chargingchange", () => {
      updatebatteryy();
    });

    batt.addEventListener("levelchange", () => {
      updatebatteryy();
    });
  });
}

checkbattery();
