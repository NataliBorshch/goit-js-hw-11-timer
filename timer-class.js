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
    const still = this.targetDate.getTime() - dateNow;
    const daysText = Math.floor(still / (1000 * 60 * 60 * 24));
    const hoursText = Math.floor((still % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minsText = Math.floor((still % (1000 * 60 * 60)) / (1000 * 60));
    const secsText = Math.floor((still % (1000 * 60)) / 1000);

    this.days.textContent = daysText > 0 ? daysText : '00' ;
    this.hours.textContent = hoursText > 0 ? hoursText : '00';
    this.mins.textContent = minsText > 0 ? minsText : '00';
    this.secs.textContent = secsText > 0 ? secsText : '00';
  }
}


