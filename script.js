function updateClockAndDate() {
  // Get the current date and time
  const now = new Date();

  // Get hours, minutes, and seconds, ensuring two digits
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Format the time as HH:MM:SS
  const time = `${hours}:${minutes}:${seconds}`;

  // Get the day, month, and year
  const day = String(now.getDate()).padStart(2, '0'); // Get day of the month
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Get month (0-indexed, so +1)
  const year = now.getFullYear(); // Get full year

  // Format the date as DD/MM/YYYY
  const date = `${day}/${month}/${year}`;

  // Update the clock and date display in the HTML
  document.getElementById('clock').textContent = time;
  document.getElementById('date').textContent = date;
}

// Run the updateClockAndDate function every second
setInterval(updateClockAndDate, 1000);


//the Older Approach (with Ternary Operators)
/*
function clock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time to always show two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds;

    // Display the time inside the element with id="clock"
    document.getElementById("clock").innerHTML = time;
}

// Update the clock every second
setInterval(clock, 1000);

 */