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

  selectable = true;

  constructor() { }

  ngOnInit(): void {
    this.number = parseInt(this.door);

    this.startCheckingDisabled();
    this.startCheckingSelected();
  }

  checkIfDisabled(): boolean {
    if (evaluation.disabledDoor == this.number) {
      return true;
    }
    return false;
  }

  disableDoor() {
    this.gone = true;
    this.unselected = false;
    this.selected = false;
    this.selectable = false;
    setTimeout(() => {
      this.gone = false;
      this.selectable = true;
    }, 1000);
  }

  onSelect() {
    if (this.selectable) {
      evaluation.setSelected(this.number);
      evaluation.disableRandom(this.number);
      evaluation.selection++;
    }
  }

  startCheckingDisabled() {
    const timer = setInterval(() => {
      if (this.checkIfDisabled()) {
        this.disableDoor();
        clearInterval(timer);
      }
    }, 10);
  }

  startCheckingSelected() {
    const timer = setInterval(() => {
      if (evaluation.selectedDoor == this.number) {
        this.selected = true;
        this.unselected = false;
        this.selectable = false;
        setTimeout(() => {
          this.selectable = true;
          this.selected = false;
          this.unselected = true;
          evaluation.setSelected(0);
        }, 1000);
      } else {
        this.selected = false;
      }
    }, 10);
  }
}
