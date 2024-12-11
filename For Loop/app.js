// FOR LOOP

// let tableNumber = prompt('Enter Table Number')
// for(let i = 1; i <= 20; i++){
//     console.log(tableNumber +' x ' + i + ' = ' + i*tableNumber);
//     document.write(tableNumber +' x ' + i + ' = ' + i*tableNumber +'</br>');

// };

// let weekDays =['a','b','c','d','e','f','g'];

// for(i = 0; i < weekDays.length; i++){
//     document.write(weekDays[i]+"<br>");
// }

// STOP WATCH

let minutes_html = document.getElementById("min");
let seconds_html = document.getElementById("sec");
let milliSeconds_html = document.getElementById("ms");
let start_btn = document.getElementById("start_btn");

let seconds = 0;
let milliSeconds = 0;
let minutes = 0;

let watchInterval;

function start() {
  watchInterval = setInterval(function () {
    milliSeconds++;
    if (milliSeconds >= 99) {
      seconds++;
      milliSeconds = 0;
      if (seconds >= 10) {
        minutes++;
        seconds = 0;
      }
    }
    milliSeconds_html.innerText = milliSeconds;
    seconds_html.innerText = seconds < 10 ? "0" + seconds : seconds;
    minutes_html.innerText = minutes < 10 ? "0" + minutes : minutes;
    start_btn.disabled = true;
  }, 10);
}

function stop() {
  clearInterval(watchInterval);
  start_btn.disabled = false;
}

function reset() {
  clearInterval(watchInterval);
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  minutes_html.innerText = 0;
  seconds_html.innerText = 0;
  milliSeconds_html.innerText = 0;
  start_btn.disabled = false;
}
