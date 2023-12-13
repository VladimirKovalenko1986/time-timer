// const refs = {
//   timeEl: document.getElementById('time'),
//   stopBtnEL: document.getElementById('stopBtn'),
//   startBtn: document.getElementById('continueBtn'),
// };

// const newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
// let timerId = null;
// const isActive = false;

// refs.stopBtnEL.addEventListener('click', stopInterval);
// refs.startBtn.addEventListener('click', coontinueInterval);

// timerId = setInterval(countDownTimeToNY, 1000);

// function countDownTimeToNY() {
//   const now = Date.now();
//   const diff = newYearDate - now;
//   const time = getTimeComponets(diff);
//   updateClockYext(time);

//   if (diff <= 0) {
//     stopInterval();
//     refs.timeEl.textContent = 'Happy New Year!!!!';
//   }
// }

// function stopInterval() {
//   clearInterval(timerId);
//   refs.startBtn.disabled = false;
//   refs.stopBtnEL.disabled = true;
//   console.log('Таймер зупинено!!!!');
// }

// function coontinueInterval() {
//   timerId = setInterval(countDownTimeToNY, 1000);
//   refs.startBtn.disabled = true;
//   refs.stopBtnEL.disabled = false;
// }

// function getTimeComponets(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time / (1000 * 60 * 60)) % 24));
//   const minutes = pad(Math.floor((time / (1000 * 60)) % 60));
//   const seconds = pad(Math.floor((time / 1000) % 60));

//   return { days, hours, minutes, seconds };
// }

// function updateClockYext({ days, hours, minutes, seconds }) {
//   refs.timeEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// !!!!!! Через клас!!!!! !!!!!

const refs = {
  timeEl: document.getElementById('time'),
  stopBtnEL: document.getElementById('stopBtn'),
  startBtn: document.getElementById('continueBtn'),
};

class Timer {
  constructor({ onTick }) {
    this.timerId = null;
    this.isActive = false;
    this.newYearDate = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
    this.onTick = onTick;

    this.init();
  }
  init() {
    this.timerId = setInterval(() => this.countDownTimeToNY(), 1000);
  }

  countDownTimeToNY() {
    const now = Date.now();
    const diff = this.newYearDate - now;
    const time = this.getTimeComponets(diff);
    updateClockYext(time);

    if (diff <= 0) {
      stopInterval();
      refs.timeEl.textContent = 'Happy New Year!!!!';
    }
  }

  stopInterval() {
    clearInterval(this.timerId);
    refs.startBtn.disabled = false;
    refs.stopBtnEL.disabled = true;
    console.log('Таймер зупинено!!!!');
  }

  continueInterval() {
    this.timerId = setInterval(() => this.countDownTimeToNY(), 1000);

    // +++++ Через bind ++++
    // this.timerId = setInterval(this.countDownTimeToNY.bind(this), 1000);

    refs.startBtn.disabled = true;
    refs.stopBtnEL.disabled = false;
  }

  getTimeComponets(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time / (1000 * 60 * 60)) % 24));
    const minutes = this.pad(Math.floor((time / (1000 * 60)) % 60));
    const seconds = this.pad(Math.floor((time / 1000) % 60));

    return { days, hours, minutes, seconds };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({ onTick: updateClockYext });

refs.stopBtnEL.addEventListener('click', timer.stopInterval.bind(timer));
refs.startBtn.addEventListener('click', timer.continueInterval.bind(timer));

function updateClockYext({ days, hours, minutes, seconds }) {
  refs.timeEl.textContent = `${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;
}
