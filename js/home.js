const anicutMap = (() => {
  var map;

  var data = [
    {
      name: "Naman Anicut",
      village: "Nadukombai",
      lat: 11.325278,
      lng: 78.304444,
      ayacut: "44.23",
    },
    {
      name: "Nagaraj Anicut",
      village: "Nadukombai",
      lat: 11.325556,
      lng: 78.306667,
      ayacut: "11.32",
    },
  ];

  var init = function () {
      map = new google.maps.Map(document.getElementById("mapContainer"), {
        center: { lat: 11.325556, lng: 78.306667 },
        zoom: 14,
      });
    },
    addMarkers = function () {
      data.map((val) => {
        const contentString =
          "<div>" +
          "<h3>" +
          val.name +
          "(" +
          val.village +
          ")</h3>" +
          "<div>Ayacut in Ha " +
          val.ayacut +
          "<div>" +
          "</div>";

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        const pos = { lat: val.lat, lng: val.lng };
        const marker = new google.maps.Marker({
          position: pos,
          map,
          title: val.name,
        });
        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });
      });
    };
  buildMap = function () {
    init();
    addMarkers();
  };

  return {
    buildMap: buildMap,
  };
})();

function initMap() {
  anicutMap.buildMap();
}
