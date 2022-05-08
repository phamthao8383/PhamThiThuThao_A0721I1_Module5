import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.css']
})
export class CountdownTimerGetSetComponent implements OnInit {

  constructor() { }

  private interValid = 0;
  message = '';
  remainingTime: number;
  private _seconds = 11;
  @Input()
  get seconds(): number {
    return this._seconds;
  }
  set seconds(seconds) {
    seconds = typeof seconds == 'undefined' ? 11 : seconds;
    const secondsFixed = Number(seconds);
    this._seconds = Number.isNaN(secondsFixed) ? 11 : secondsFixed;
  }
  ngOnDestroy() {
    this.clearTime();
  }
  ngOnInit() {
    this.reset();
    this.start();
  }
  clearTime() {
    clearInterval(this.interValid);
  }
  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;

    }
  }
  stop() {
    this.clearTime();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTime();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }
  private countDown() {
    this.clearTime();
    this.interValid = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime == 0) {
        this.message = "Blast off!";
        this.clearTime()
        this.start();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }

}
