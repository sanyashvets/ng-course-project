import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 'recipes';

  selectPage(route: string) {
    this.currentPage = route;
  }
}
