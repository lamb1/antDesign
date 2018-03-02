// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  isOpenOne = true;
  isOpenTwo = false;
  isOpenThree = false;

  openChange(value) {
    if (value === 'one') {
      this.isOpenTwo = false;
      this.isOpenThree = false;
    } else if (value === 'two') {
      this.isOpenOne = false;
      this.isOpenThree = false;
    } else if (value === 'three') {
      this.isOpenOne = false;
      this.isOpenTwo = false;
    }

  }
  constructor() {
  }

  ngOnInit() {
  }
}
