
document.addEventListener("DOMContentLoaded", function () {
    const botaoMostrar = document.getElementById("botaomostrar");
    const secaoMostrar = document.getElementById("smostrar");
  
    if (botaoMostrar && secaoMostrar) {
      botaoMostrar.addEventListener("click", function () {
        if (secaoMostrar.style.display === "none") {
          secaoMostrar.style.display = "block";
        } else {
          secaoMostrar.style.display = "none";
        }
      });
    }
  });