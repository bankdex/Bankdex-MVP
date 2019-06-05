import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './bankdex/dashboard/dashboard.component';
import { BankdexModule } from './bankdex/bankdex.module';
import { TestComponentComponent } from './bankdex/test-component/test-component.component';
import { TestbootstrapComponent } from './bankdex/testbootstrap/testbootstrap.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboardd', component: TestComponentComponent },
    { path: 'boot', component: TestbootstrapComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes), BankdexModule
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
