import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bank';
  filterargs = ['income', 'outcome', 'loan', 'investment'];
}
