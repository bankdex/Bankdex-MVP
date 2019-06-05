import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../angular.component.module';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestbootstrapComponent } from './testbootstrap/testbootstrap.component';
import { GraphComponent } from './graph/graph.component';
import { ConnectWalletComponent } from './connect-wallet/connect-wallet.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EthereumWalletComponent } from './ethereum-wallet/ethereum-wallet.component';
import { NeoWalletComponent } from './neo-wallet/neo-wallet.component';

@NgModule({
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule, FormsModule,RouterModule

  ],
  declarations: [DashboardComponent, TestComponentComponent, TestbootstrapComponent, GraphComponent, ConnectWalletComponent, EthereumWalletComponent, NeoWalletComponent],
  entryComponents: [ConnectWalletComponent],
  exports:[]
})
export class BankdexModule { }
