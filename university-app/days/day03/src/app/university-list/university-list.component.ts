import { University } from './../models/university';
import { Component, OnInit } from '@angular/core';
import { SearchFilter } from '../models/searchfilter';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  searchFilter: SearchFilter = new SearchFilter();
  universities: University[] = [];

  constructor() {}

  ngOnInit(): void {}

  search(event: Event) {
    alert('RICERCA');
    console.log('%o', event);
  }

}
