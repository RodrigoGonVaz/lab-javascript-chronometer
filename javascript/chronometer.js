class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
    this.currentTimeMil = 0;
    this.intervalIdMil = null
    }
    
  start(callback) {
    this.intervalId = setInterval(() => {
    this.currentTime ++;
    if (callback) {
      callback()      
    }

    },1000)
  }
  startMil(callback1) {
    this.intervalIdMil = setInterval(() => {
    this.currentTimeMil ++;
    if (callback1) {
      callback1()      
    }
    },10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    } 

  getSeconds() {
    return (this.currentTime % 60)
  }
  getMilli() {
    return this.computeTwoDigitNumber(this.currentTimeMil)  
  
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      // Se puede acceder como arreglos
      return `0${value}` 
     } else if (value > 9) {
      return `${value}` 
     } else if (condition) {
       
     }
  }

  stop() {
     return clearInterval(this.intervalId)
  }
  stopMil() {
    return clearInterval(this.intervalIdMil)
  }

  reset() {
    return this.currentTime = 0;
  }
  resetMil() {
    return this.currentTimeMil = 0;
  }

  split() {
    let mm = this.computeTwoDigitNumber(this.getMinutes());
    let ss = this.computeTwoDigitNumber(this.getSeconds());
    let mil = this.computeTwoDigitNumber(this.getMilli());  
    return `${mm}:${ss}:${mil}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
