// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("button").onclick = toggle;

/*
const form = getElementById("form");
const exitbutton = getElementById("exitbutton");

function hideForm() {
  document.getElementById("form").style.display = "none";
}
document.getElementById("exitbutton").onclick = hideForm;
*/

function toggleFAQ() {
  this.classList.toggle("open");
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggleFAQ;
document.getElementById("section2").onclick = toggleFAQ;
document.getElementById("section3").onclick = toggleFAQ;
document.getElementById("section4").onclick = toggleFAQ;