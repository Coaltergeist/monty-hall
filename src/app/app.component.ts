import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'monty-hall';

  showInstruction = true;
  showControl = false;
  showExperimental = false;
  showSurvey = false;

  isControl = true

  start() {
    this.showInstruction = !this.showInstruction;
    var x = Math.random();
    if (x < .5) {
      this.isControl = true;
      this.showControl = true;
    } else {
      this.isControl = false;
      this.showControl = true;
    }
  }
}
