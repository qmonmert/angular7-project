import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { DragDropAdvancedComponent } from "./drag-drop-advanced/drag-drop-advanced.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "virtual-scroll", component: VirtualScrollComponent },
  { path: "drag-drop", component: DragDropComponent },
  { path: "drag-drop-advanced", component: DragDropAdvancedComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
