window.addEventListener("keydown", keydown);
window.addEventListener("keyup", keyup);
function keydown(event) {
  let keys = document.querySelector(`#${event.key.toLowerCase()}`);
  keys.classList.add("active");
}
function keyup(event) {
  let keys = document.querySelector(`#${event.key.toLowerCase()}`);
  keys.classList.remove("active");
}
