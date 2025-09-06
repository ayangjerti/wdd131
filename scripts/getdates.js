// getdates.js

// Dynamically insert current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Dynamically insert last modified date
document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;
