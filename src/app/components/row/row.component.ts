import { Component, Input } from '@angular/core';

interface IUser {
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
})
export class RowComponent {
  @Input() user: IUser;
}
