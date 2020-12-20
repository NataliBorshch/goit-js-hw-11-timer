import CountdownTimer from "./timer-class.js";

const date = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
date.showTime();
