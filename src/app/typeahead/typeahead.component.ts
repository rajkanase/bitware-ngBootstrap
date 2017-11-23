import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujrat',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizhoram', 'Nagaland', 'Odisha', 'Panjab', 'Rajasthan', 'Sikkim', 'Tamilnadu', 'Telangana',
  'Tripurra', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal'];
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {

  constructor() { }

  public model: any;
  
    search = (text$: Observable<string>) =>
      text$
        .debounceTime(200)
        .distinctUntilChanged()
        .map(term => term.length < 2 ? []
          : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  ngOnInit() {
  }

}
