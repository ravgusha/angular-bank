import { Pipe, PipeTransform } from '@angular/core';

interface IUser {
  _id: string;
  amount: number;
  type: string;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Pipe({
  name: 'filter',
  pure: false,
})

export class FilterPipe implements PipeTransform {
  transform(items: IUser[], filter: string) {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item.type.indexOf(filter) !== -1);
  }
}
