import { RouterModule, Routes } from "@angular/router";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { AccordianComponent } from "./accordian/accordian.component";
import { AlertComponent } from "./alert/alert.component";

const routes:Routes = [
    { path:'accordian', component:AccordianComponent},
    { path: 'datepicker', component: DatePickerComponent},
    { path:'alert', component:AlertComponent}

];

export const MyRoutingModule = RouterModule.forRoot(routes);
