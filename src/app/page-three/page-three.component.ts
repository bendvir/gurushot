import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {
  @Input() currentPage: number;
  constructor() { }

  ngOnInit() {
  }

}
