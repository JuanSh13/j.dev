let show = document.getElementById("show-text");

function animateText(text) {
  let index = 0;
  let animationIntervale = setInterval(() => {
    if (index >= text.length) {
      clearInterval(animationIntervale);
    } else {
      show.innerHTML = text.substring(0, index + 1);
      index++;
    }
  }, 100);
}

animateText("Desarrollador Web & Diseñador IU.");
