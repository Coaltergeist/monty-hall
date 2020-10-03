import { Component, OnInit } from '@angular/core';
import { evaluation } from '../../state';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent implements OnInit {
  win: boolean;
  lose: boolean;

  constructor() {
    this.win = false;
    this.lose = false;
  }

  ngOnInit(): void {
    var element = document.getElementById("passthrough");
    element.classList.remove("clickable");
    element.classList.add("unclickable");
    setTimeout(() => {
      element.classList.remove("unclickable");
      element.classList.add("clickable");
    }, 1000);
    this.startTesting();
  }

  startTesting() {
    const timer = setInterval(() => {
      // if (evaluation.displayWin == 1) {
      //   this.win = true;
      //   setInterval(() => {
      //     this.win = false;
      //   }, 1000);
      // } else if (evaluation.displayWin == 2) {
      //   this.lose = true;
      //   setInterval(() => {
      //     this.lose = false;
      //   }, 1000);
      // }
    }, 10);
  }
}
