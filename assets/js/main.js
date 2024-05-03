  const countDownDate = new Date("May 25, 2026 00:00:00").getTime();

  const x = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the time remaining
    const distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById("days").innerHTML = "<span>" + days + "d</span>";
    document.getElementById("hours").innerHTML = "<span>" + hours + "h</span>";
    document.getElementById("minutes").innerHTML = "<span>" + minutes + "m</span>";
    document.getElementById("seconds").innerHTML = "<span>" + seconds + "s</span>";
    
    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "<span>0d</span>";
      document.getElementById("hours").innerHTML = "<span>0h</span>";
      document.getElementById("minutes").innerHTML = "<span>0m</span>";
      document.getElementById("seconds").innerHTML = "<span>0s</span>";
    }
  }, 1000);
