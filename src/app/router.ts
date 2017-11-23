import { RouterModule, Routes } from "@angular/router";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { AccordianComponent } from "./accordian/accordian.component";
import { AlertComponent } from "./alert/alert.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { ModalComponent } from "./modal/modal.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { PopoverComponent } from "./popover/popover.component";
import { ProgressbarComponent } from "./progressbar/progressbar.component";

const routes:Routes = [
    { path:'accordian', component:AccordianComponent},
    { path: 'datepicker', component: DatePickerComponent},
    { path:'alert', component:AlertComponent},
    { path: 'carousel',component : CarouselComponent},
    { path: 'collapse', component: CollapseComponent},
    { path: 'dropdown', component:DropdownComponent},
    { path:'modal', component:ModalComponent},
    { path: 'pagination', component:PaginationComponent},
    { path:'popover', component:PopoverComponent},
    { path:'progressbar', component:ProgressbarComponent}

];

export const MyRoutingModule = RouterModule.forRoot(routes);
