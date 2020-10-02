import { Interpolation } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
// import { Evaluation } from '../../evaluation'
import { evaluation } from '../../state'

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.sass']
})
export class DoorComponent implements OnInit {
  @Input() door: string;

  unselected = true;
  selected = false;
  gone = false;
  number = 0;

  constructor() { }

  ngOnInit(): void {
    this.number = parseInt(this.door);

    const timer = setInterval(() => {
      if (this.checkIfDisabled()) {
        clearInterval(timer);
        this.disableDoor();
      }
    }, 10);
  }

  checkIfDisabled(): boolean {
    if (evaluation.disabledDoor == this.number) {
      return true;
    }
    return false;
  }

  disableDoor() {
    this.selected = false;
    this.gone = true;
    this.unselected = false;
    setTimeout(() => {
      this.gone = false;
    }, 1000);
  }

  onSelect() {
    this.unselected = false;
    this.selected  = true;
    evaluation.disableRandom(this.number);
  }
}
