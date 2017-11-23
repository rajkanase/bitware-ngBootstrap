import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MyRoutingModule } from './router';
import { AccordianComponent } from './accordian/accordian.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DatePickerComponent,
    AccordianComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
