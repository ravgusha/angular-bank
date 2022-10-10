import { Component } from '@angular/core';
import data from './data/db.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'bank';
  data = data;

  filterargs = ['income', 'outcome', 'loan', 'investment'];
}
