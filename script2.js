let startTime,updatedTime,difference=0;
let timerInterval;
let running =false;
const display=document.getElementById("display");
const laps=document.getElementById("laps")
document.getElementById("startbtn").addEventListener("click",start);
document.getElementById("pausebtn").addEventListener("click",stop);
document.getElementById("resetbtn").addEventListener("click",reset);
document.getElementById("lapbtn").addEventListener("click",lap);
function updateDisplay(time) {
  // Extract milliseconds (last two digits of milliseconds)
  let milliseconds = parseInt((time % 1000) / 10);

  // Extract seconds (mod 60 so it wraps after a minute)
  let seconds = Math.floor((time / 1000) % 60);

  // Extract minutes (mod 60 so it wraps after an hour)
  let minutes = Math.floor((time / (1000 * 60)) % 60);

  // Extract hours
  let hours = Math.floor((time / (1000 * 60 * 60)));

  // Format values so they always have 2 digits (e.g., "05" instead of "5")
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

  // Update the HTML element with the formatted time
  display.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
function start() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(function () {
      updatedTime = new Date().getTime();
      difference = updatedTime - startTime;
      updateDisplay(difference);
    }, 10);
    running = true;
  }
}
function stop()
{
  clearInterval(timeInterval);
  running=false;
}
function reset()
{
  clearInterval(timeInterval);
  running=false;
  difference=0;
  updateDisplay(0);
  laps.innerHTML="";

}
function lap()
{
  if(running)
    {
      let laptime=display.innerHTML;
      let li = document.createElement("li");
      li.innerText = lapTime;
      laps.appendChild(li);
    }
    
}