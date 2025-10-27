document.addEventListener("DOMContentLoaded", function () {
  // Target your countdown container
  const timerObj = document.getElementById("izfxms");

  // Starting time (28 minutes in seconds)
  let totalSeconds = 28 * 60;

  function updateTimer() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Pad with 0 if less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update DOM
    timerObj.querySelector(".tminutes").innerHTML = minutes;
    timerObj.querySelector(".tseconds").innerHTML = seconds;

    // When timer ends
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      // Optional: show a message or hide timer
      timerObj.querySelector(".countdown-inner").style.display = "none";
      timerObj.querySelector(".timer-after-txt").innerHTML = "⏳ Time’s up!";
      timerObj.querySelector(".timer-after-txt").style.display = "block";
    }

    totalSeconds--;
  }

  // Run every second
  updateTimer(); // run once immediately
  const timerInterval = setInterval(updateTimer, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".togglefaq");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const answer = this.nextElementSibling;

      // Close all other open answers
      document
        .querySelectorAll(".ff-faqans-session.active")
        .forEach((openAns) => {
          if (openAns !== answer) openAns.classList.remove("active");
        });

      // Toggle current answer
      answer.classList.toggle("active");

      // Update icons
      const icon = this.querySelector(".faq-icon");
      icon.classList.toggle("fa-chevron-circle-down");
      icon.classList.toggle("fa-chevron-circle-up");
    });
  });
});
