// Change header text
function changeText() {
  document.getElementById("name").innerText =
    "Welcome to My Portfolio 🚀";
}

// Project message
function showMessage() {
  document.getElementById("projectMsg").innerText =
    "More projects coming soon. Stay tuned!";
}

// Show email on button click
function showEmail() {
  document.getElementById("email").innerText =
    "prashant@example.com";
}

// Auto update year in footer
document.getElementById("year").innerText =
  "© " + new Date().getFullYear() + " Prashant Kumar";
