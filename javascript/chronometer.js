class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    }
    
  start() {
    this.intervalId = setInterval(() => {
    this.currentTime ++;

    },1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)  
  } 

  getSeconds() {
    return (this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return `0${value}` 
     } else if (value > 9) {
      return `${value}` 
     }
  }

  stop() {
     return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    return `${mm}:${ss}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
