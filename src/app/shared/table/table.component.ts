import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import * as models from '../../models/models-exports';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['date', 'propertyAddress', 'proprtysOwnerName', 'tenantsName', 'projectCategory', 'status'];
  tableData: models.TableRow[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.tableData$.subscribe(data => {
        this.tableData = data;
    });
  }

}
