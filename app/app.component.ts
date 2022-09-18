import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  user: string;
  id: number;
  user_name: string;
  score: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 23},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 24},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 25},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},
  {id: 67582618998, user: '', user_name: 'Prasanth', score: 22},  
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  PageTitle = 'Users';

  filterParameters: FormGroup | undefined;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private _formBuilder: FormBuilder,    
  )
  {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  filterParametersGroup()
  {
    this.filterParameters = this._formBuilder.group({
      user_name: [null]
    })
  }
  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  gridView()
  {
    var i;
    var elements = document.getElementsByClassName("column");
    // for (i = 0; i < elements.length; i++) {
    //   elements[i].style.width = "50%";
    // }
  }

  listView()
  {
    var i;
    var elements = document.getElementsByClassName("column");
    // for (i = 0; i < elements.length; i++) {
    //   elements[i].style.width = "50%";
    // }
  }
}
