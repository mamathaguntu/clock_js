const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');




function runClock() {
  var currentDate = new Date();
  console.log(currentDate);
  let hr = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();
  console.log('Hours: ' + hr + ' Minutes: ' + min + ' Seconds: ' + sec);

  // use the current date hours , minutes and seconds to get the hands movement in terms of degrees of a circle.
  // 1 hr = 360/12 degrees
  // 1 min = 360/60 degrees
  // 1 sec = 360/60 degrees 
  let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
  let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
  let secPosition = sec * 360 / 60;

  //set the transform values to rotate the hands.
  HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

var interval = setInterval(runClock, 1000);