import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.sass']
})
export class DoorComponent implements OnInit {

  unselected = true;
  selected = false;
  gone = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.unselected = false;
    this.selected  = true;
  }

}
