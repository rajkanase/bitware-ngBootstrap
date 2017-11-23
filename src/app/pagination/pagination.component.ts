import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  currentPage = 3;
  currentPage1 = 2;
  currentPage2 = 1;
  ngOnInit() {
  }

}
