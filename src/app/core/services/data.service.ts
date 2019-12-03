import { Injectable } from '@angular/core';
import * as models from '../../models/models-exports';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private tableRowModel: models.TableRow[] = [];
  private currentCampaignIndex = 0;
  private tableData = new BehaviorSubject<models.TableRow[]>(this.tableRowModel);
  tableData$ = this.tableData.asObservable();
  constructor(private http: HttpClient) { }

  getProjects() {
    const url = `https://frontdoormobileqa.clipcall.it/api/v1/web/test`;
    this.http.get(url).subscribe(table => {
      this.tableRowModel = table as models.TableRow[];
      this.tableData.next(this.tableRowModel);
    });
  }

}
