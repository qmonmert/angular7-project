import { Component, OnInit } from "@angular/core";

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-drag-drop-advanced",
  templateUrl: "./drag-drop-advanced.component.html",
  styleUrls: ["./drag-drop-advanced.component.scss"]
})
export class DragDropAdvancedComponent implements OnInit {
  numbers: number[] = [];
  otherNumbers: number[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
  }
}
