mapboxgl.accessToken =
"pk.eyJ1IjoiMjVjaGVuMjUiLCJhIjoiY2t6eTdvYjloMDh6MzJ2cXVkM2g4bnkzNiJ9.aHMOMmnuIa2XiI0cS8RrOw";
const style_Serious = "mapbox://styles/25chen25/cl0zsi4a100ve14qydt8u8kt6";
const style_Slight = "mapbox://styles/25chen25/cl0zt1ffe003h14p9ubajvg3j";
const map = new mapboxgl.Map({
 container: "map", // container ID
 style: style_Serious,
 center: [-4.2518, 55.8642],
 zoom: 12
});
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");
//On click the radio button, toggle the style of the map.
for (const input of inputs) {
 input.onclick = (layer) => {
 if (layer.target.id == "style_Serious") {
 map.setStyle(style_Serious);
 }
 if (layer.target.id == "style_Slight") {
 map.setStyle(style_Slight);
 }
 };
}