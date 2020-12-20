export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.secs = document.querySelector('[data-value="secs"]');
  }
  showTime() {
    this.currentTime();
    setInterval(() => this.currentTime(), 1000);
  }
  currentTime() {
    const dateNow = Date.now();
    this.stillTime(dateNow);
  }

  stillTime(dateNow) {
    const time = this.targetDate.getTime() - dateNow;
    const still = time > 0 ? time : 0;
    this.days.textContent = Math.floor(still / (1000 * 60 * 60 * 24));
    this.hours.textContent = Math.floor((still % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.mins.textContent = Math.floor((still % (1000 * 60 * 60)) / (1000 * 60));
    this.secs.textContent = Math.floor((still % (1000 * 60)) / 1000);
  }
}


