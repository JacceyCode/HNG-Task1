const day = document.getElementById("day");
const utc = document.getElementById("utc");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// To get the current day of the week.
const date = new Date();
const curDay = days[date.getDay()];
day.innerHTML = curDay;

// To get the current UTC TIME IN MILLISECONDS
setInterval(utcTime, 1000);
function utcTime() {
  const date = new Date();
  const utcTimeMs = date.getUTCMilliseconds();
  utc.innerHTML = utcTimeMs;
}
