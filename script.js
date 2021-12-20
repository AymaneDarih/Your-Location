"use:strict";

navigator.geolocation.getCurrentPosition(
  function (postion) {
    const { latitude } = postion.coords;
    const { longitude } = postion.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    var map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`Here you are`)
      .openPopup();
  },
  function () {
    alert("We couldn't get your location! Please Allow location access ");
  }
);
