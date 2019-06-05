import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-connect-wallet',
  templateUrl: './connect-wallet.component.html',
  styleUrls: ['./connect-wallet.component.css']
})
export class ConnectWalletComponent implements OnInit {

  ethereum: boolean = true;
  neo: boolean = false;

  constructor(public dialogRef: MatDialogRef<ConnectWalletComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  showEthereum() {
    this.ethereum = true;
    this.neo = false;
  }
  showNeo() {
    this.ethereum = false;
    this.neo = true;
  }
  ngOnInit() {

  }
}
