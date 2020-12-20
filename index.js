import CountdownTimer from "./timer-class.js";


const date = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});
date.showTime();

