import {Component} from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    <my-footer></my-footer>
  `
})
export class HomeComponent {
}