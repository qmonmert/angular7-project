import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { VirtualScrollComponent } from "./virtual-scroll/virtual-scroll.component";
import { DragDropComponent } from "./drag-drop/drag-drop.component";
import { DragDropAdvancedComponent } from "./drag-drop-advanced/drag-drop-advanced.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    DragDropComponent,
    DragDropAdvancedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
