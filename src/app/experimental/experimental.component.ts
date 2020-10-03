import { Component, OnInit } from '@angular/core';
import { evaluation } from '../../state';

@Component({
  selector: 'app-experimental',
  templateUrl: './experimental.component.html',
  styleUrls: ['./experimental.component.sass']
})
export class ExperimentalComponent implements OnInit {

  win: boolean;
  lose: boolean;
  testing: boolean;
  currentTest: number;

  constructor() {
    this.win = false;
    this.lose = false;
    this.testing = true;
    this.currentTest = 0;
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
      if (evaluation.currentTest != this.currentTest) {
        if (evaluation.isTestWinList[this.currentTest]) {
          this.win = true;
        } else {
          this.lose = true;
        }
        this.testing = false;
        setTimeout(() => {
          this.currentTest = evaluation.currentTest;
          this.win = false;
          this.lose = false;
          this.testing = true;
        }, 1000);
      }
    }, 10);
  }

}
