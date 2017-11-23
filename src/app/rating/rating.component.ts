import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styles: [`
  .star {
    font-size: 1.5rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
`]
})
export class RatingComponent implements OnInit {
  currentRate = 6;
  constructor() { }

  ngOnInit() {
  }

}
