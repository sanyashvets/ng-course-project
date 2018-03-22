import {Component, EventEmitter, OnInit, Output, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  currentPage = 'recipes';
  @Output('page') url = new EventEmitter<string>();

  selectRoute(name: string) {
    this.currentPage = name;
    this.url.emit(name);
  }

  ngAfterViewInit() {
    this.selectRoute(this.currentPage);
  }

  constructor() { }

  ngOnInit() {
  }

}
