// const date = new Date();
// const date1 = Date.now();

// console.dir(date);
// console.log(date.getTime());
// console.log(date1);

// !!!!!!! TIMER !!!!!!!!!!!

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockText: document.querySelector('.js-clock'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.init();
  }
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockText,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockText({ hours, mins, secs }) {
  refs.clockText.textContent = `${hours}:${mins}:${secs}`;
}
