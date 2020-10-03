import { Component } from '@angular/core';
import { Evaluation } from '../evaluation';
import { evaluation } from '../state';

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
      this.isControl = false;
      this.showControl = true;
    } else {
      this.isControl = false;
      this.showControl = true;
    }
    evaluation.setIsControl(this.isControl);

    const timer = setInterval(() => {
      if (evaluation.isCurrentTestControl()) {
        this.showExperimental = false;
        this.showControl = true;
      } else {
        this.showExperimental = true;
        this.showControl = false;
      }
    }, 10);
  }
}
