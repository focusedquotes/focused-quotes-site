// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Image gallery switcher
function changeImage(element) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = element.src;
}

// Countdown Timer (15 minutes)
function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      display.textContent = "Expired";
    }
  }, 1000);
}

window.onload = function () {
  const fifteenMinutes = 60 * 15, // 15 minutes
        display = document.querySelector('#countdown');
  startCountdown(fifteenMinutes, display);
};
