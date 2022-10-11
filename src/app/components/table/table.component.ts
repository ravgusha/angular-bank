import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from '../../data/db.json';

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
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tab = params['tab'];
      console.log(this.tab);
    });
  }

  tab = 0;
  data = data;
  filterargs = ['income', 'outcome', 'loan', 'investment'];
}
