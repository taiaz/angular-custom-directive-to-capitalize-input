import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstCapDirective } from './directives/first-cap.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FirstCapDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
