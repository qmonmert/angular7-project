import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";

const routes: Routes = [
  { path: "", component: VirtualScrollComponent },
  { path: "drag-drop", component: DragDropComponent },
  { path: "**", component: VirtualScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
