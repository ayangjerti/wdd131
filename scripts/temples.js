// getdates.js

// Dynamically insert current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Dynamically insert last modified date
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;



const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
    menuBtn.textContent = "☰";
  } else {
    navMenu.style.display = "flex";
    menuBtn.textContent = "✖";
  }
});