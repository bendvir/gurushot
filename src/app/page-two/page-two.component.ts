import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  @Input() currentPage: number;
  picsList = ["page-two-1.jpg", "page-two-2.jpg", 
  "page-two-3.jpg", "page-two-4.jpg", "page-two-2.jpg",
"page-two-3.jpg", "page-two-1.jpg", "page-two-3.jpg", 
"page-two-1.jpg"];
  constructor() { }

  ngOnInit() {
  }

}
