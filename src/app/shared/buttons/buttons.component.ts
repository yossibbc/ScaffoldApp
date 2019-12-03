import { Component, OnInit, Input } from '@angular/core';
import * as models from '../../models/models-exports';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() row;
  StatusEnum = models.StatusEnum;
  statusColor = 'primary';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (this.row) {
      switch (this.row.status) {
        case 0:
          this.statusColor = 'primary';
          break;
        case 1:
          this.statusColor = 'accent';
          break;
        case 2:
          this.statusColor = 'warn';
          break;
        case 3:
          this.statusColor = 'primary';
          break;

        default:
          this.statusColor = 'primary';

          break;
      }
    }

  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
