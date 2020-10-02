import { Component, OnInit } from '@angular/core';
import { evaluation } from '../../state';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      var element = document.getElementById("passthrough");
      element.classList.remove("unclickable");
      element.classList.add("clickable");
    }, 1000);
    this.startTesting();
  }

  startTesting() {
    const timer = setInterval(() => {
      if (evaluation.selection == 2) {
        evaluation.selection = 0;
        this.ngOnInit();
      }
    }, 10);
  }
}
