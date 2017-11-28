import { Routes } from '@angular/router';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentDetailComponent } from './deployment-detail/deployment-detail.component';

export const appRoutes: Routes = [
    { path: 'deployments', component: DeploymentListComponent },
    { path: 'deployments/:id', component: DeploymentDetailComponent },
    { path: '', redirectTo: '/deployments', pathMatch: 'full'}
]

