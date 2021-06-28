document.querySelector(".search").addEventListener("click", function () {
  document.querySelector("#search").focus();
});

document.querySelector("#search").addEventListener("focus", function () {
  document.querySelector(".search").style.borderColor = "#379fef";
  document.querySelector(".search").style.boxShadow =
    "0 0 15px rgba(55, 159, 239, 0.6)";
});

document.querySelector("#search").addEventListener("blur", function () {
  document.querySelector(".search").style.borderColor = "#bbc0c4";
  document.querySelector(".search").style.boxShadow = "none";
});
