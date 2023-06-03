
function showContent() {
  var loadingScreen = document.getElementById("loading-screen");
  var content = document.getElementById("content");

  loadingScreen.style.display = "none";
 /* content.style.display = "block";*/
}

// Simulate loading delay
setTimeout(showContent, 1000);

let popEl = document.getElementById("popup");

function openPop() {
  popEl.classList.add("pop-out");
}

window.addEventListener("load", function() {
  setTimeout(openPop, 1400);
});



