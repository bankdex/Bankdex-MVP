import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConnectWalletComponent } from '../connect-wallet/connect-wallet.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ConnectWalletComponent,{
      height: '600px',
      width: '1200px',
    });
}

  ngOnInit() {
  }

}

export interface PeriodicElement {
  name: number;
  position: number;
  weight: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 24825, name: 0.25857, weight: '12:34:21'},
  {position: 33822, name: 0.27853, weight: '01:04:01'},
  {position: 16823, name: 0.35805, weight: '02:24:10'},
  {position: 44827, name: 0.26854, weight: '02:45:23'},
  {position: 74829, name: 0.25850, weight: '03:07:11'},
  {position: 64820, name: 0.34856, weight: '03:34:21'},
  {position: 54826, name: 0.45851, weight: '03:27:59'},
 
  
];