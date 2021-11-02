class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    }
    
  start(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime ++;
    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)  
  } 

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}` 
     } else if (value > 9) {
      return `${value}` 
     }
  }

  stop(intervalId) {
     return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
