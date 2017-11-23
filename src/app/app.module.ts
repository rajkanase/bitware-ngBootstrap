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
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DatePickerComponent,
    AccordianComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ModalComponent,
    PaginationComponent,
    PopoverComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TypeaheadComponent
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
