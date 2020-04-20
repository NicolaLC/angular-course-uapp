import { University } from './../models/university';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-university-table',
  templateUrl: './university-table.component.html',
  styleUrls: ['./university-table.component.scss']
})
export class UniversityTableComponent implements OnInit {
  @Input() universities: University[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
