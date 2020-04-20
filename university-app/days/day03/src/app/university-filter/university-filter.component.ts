import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchFilter } from '../models/searchfilter';

@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent implements OnInit {
  @Input() searchFilter: SearchFilter = new SearchFilter();
  @Output() search: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
