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

  unselected: boolean;
  selected: boolean;
  gone: boolean;
  disabled: boolean;
  number: number;
  currentTest: number;
  //timerList: NodeJS.Timeout[]

  ngOnInit(): void {
    this.currentTest = evaluation.currentTest;
    this.number = parseInt(this.door);
    this.switchState(doorState.UNSELECTED);

    this.startCheckingDisabled();
    this.startCheckingTestEnd();
  }

  switchState(state: doorState) {
    switch (state) {
      case doorState.UNSELECTED:
        this.unselected = true;
        this.selected = false;
        this.gone = false;
        this.disabled = false;
        break;
      case doorState.SELECTED:
        this.unselected = false;
        this.selected = true;
        this.gone = false;
        this.disabled = false;
        break;
      case doorState.GONE:
        this.unselected = false;
        this.selected = false;
        this.gone = true;
        this.disabled = false;
        break;
      case doorState.DISABLED:
        this.unselected = false;
        this.selected = false;
        this.gone = false;
        this.disabled = true;
        break;
    }
  }

  onSelect() {
    this.switchState(doorState.SELECTED);
    evaluation.selection++;
    if (evaluation.selection == 1) {
      evaluation.firstSelection = this.number;
      evaluation.disableRandom(this.number);
      setTimeout(() => {
        this.switchState(doorState.UNSELECTED);
      }, 1000);
    } else {
      setTimeout(() => {
        evaluation.calculateWin(evaluation.firstSelection != this.number)
        // evaluation.displayWin = 0;
        evaluation.selection = 0;
        this.ngOnInit();
      }, 1000);
    }
  }

  checkIfDisabled(): boolean {
    if (evaluation.disabledDoorList.includes(this.number)) {
      return true;
    }
    return false;
  }

  startCheckingDisabled() {
    const timer = setInterval(() => {
      if (this.checkIfDisabled()) {
        clearInterval(timer);
        this.switchState(doorState.DISABLED);
        setTimeout(() => {
          this.switchState(doorState.GONE);
        }, 1000);
      }
    }, 10);
  }

  startCheckingTestEnd() {
    const timer = setInterval(() => {
      if (evaluation.currentTest != this.currentTest) {
        clearInterval(timer);
        evaluation.resetTest();
        this.ngOnInit();
        this.currentTest = evaluation.currentTest;
      }
    }, 10);
  }
}

enum doorState  {
  UNSELECTED,
  SELECTED,
  GONE,
  DISABLED,
}
