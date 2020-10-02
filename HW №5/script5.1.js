let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};
function propsCount(currentObject) {
  let size = Object.keys(currentObject).length;
  return size;
}
propsCount(mentor);
