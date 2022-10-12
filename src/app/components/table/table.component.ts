import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../data/db.json';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tab = params['tab'];
    });
  }

  tab = 0;
  data = data;
  filterargs = ['income', 'outcome', 'loan', 'investment'];
}
