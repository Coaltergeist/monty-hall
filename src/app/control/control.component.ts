import { Component, OnInit } from '@angular/core';

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

  }

}
