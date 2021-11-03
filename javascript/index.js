


const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes(mm) {
  let mmTime = chronometer.getMinutes();
  let countMin = 0;
  if (mmTime % 10 === 0) {
    countMin ++
    secDecElement.innerHTML = countMin;
  } else if (mmTime < 9){
    secUniElement.innerHTML = mmTime;
}}

function printSeconds(ss) {
  let ssTime = chronometer.getSeconds();
  let countSec = 0;
  if (ssTime % 10 === 0) {
    countSec ++
    secDecElement.innerHTML = countSec;
  } else if (ssTime < 9){
    secUniElement.innerHTML = ssTime;
}}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP'
  btnLeftElement.setAttribute ('class','btn stop')
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT'
  btnRightElement.setAttribute ('class', 'btn split')
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START'
  btnLeftElement.setAttribute ('class','btn start')
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET'
  btnRightElement.setAttribute ('class','btn reset')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'STOP' ) {
    chronometer.stop();
    setStartBtn ();
    setResetBtn ()
  } else {
    setStopBtn ()
    setSplitBtn ()
    chronometer.start();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET' ) {
    chronometer.reset();
  } else {
    chronometer.split();
  }
});
