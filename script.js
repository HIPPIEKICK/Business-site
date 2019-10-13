function toggle() {
  this.classList.toggle("active");
  var h2 = document.getElementById("h2");
  if (h2.innerHTML === "Book now") {
    h2.innerHTML = "X";
  } else {
    h2.innerHTML = "Book now";
  }
}

document.getElementById("button").onclick = toggle;

function toggleFAQ() {
  this.classList.toggle("open");
}

document.getElementById("section1").onclick = toggleFAQ;
document.getElementById("section2").onclick = toggleFAQ;
document.getElementById("section3").onclick = toggleFAQ;
document.getElementById("section4").onclick = toggleFAQ;