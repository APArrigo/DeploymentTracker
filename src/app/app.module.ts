import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CONFIG } from './core';
import { DeploymentListComponent } from './deployment-list/deployment-list.component';
import { DeploymentDetailComponent } from './deployment-detail/deployment-detail.component';
import { DeploymentService } from './models';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    DeploymentListComponent,
    DeploymentDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [Title, DeploymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
