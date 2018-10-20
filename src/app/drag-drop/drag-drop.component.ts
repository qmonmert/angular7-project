import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-drag-drop",
  templateUrl: "./drag-drop.component.html",
  styleUrls: ["./drag-drop.component.scss"]
})
export class DragDropComponent implements OnInit {
  numbers: number[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }
}
