import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { DragDropAdvancedComponent } from './drag-drop-advanced/drag-drop-advanced.component';

@NgModule({
  declarations: [AppComponent, VirtualScrollComponent, DragDropComponent, DragDropAdvancedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
