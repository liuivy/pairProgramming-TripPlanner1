import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoianplbmcxMyIsImEiOiJja2h1c2x3a3UxNmxsMnpveXExZWkyMnk0In0.P2xlNILYKP7q6st_JeiLjQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundColor = 'red';
markerDomEl.style.backgroundImage = "url(https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

