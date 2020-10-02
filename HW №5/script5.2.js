let color = {
  color1: "red",
  color2: "black",
  color3: "white",
  color4: "yellow",
  color5: "green",
};
function showProps(obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  return [keys, values];
}
showProps(color);
