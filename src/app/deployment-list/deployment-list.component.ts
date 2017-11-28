import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable';

import { Deployment, DeploymentService } from '../models'
import { DeploymentDetailComponent } from '../deployment-detail/deployment-detail.component';

@Component({
  selector: 'deployment-list',
  templateUrl: './deployment-list.component.html',
  styleUrls: ['./deployment-list.component.css']
})
export class DeploymentListComponent implements OnInit {

  constructor(
    private deploymentService: DeploymentService
  ) {}

  private deployments: Deployment[];
  public selectedDeployment: Deployment;
  private selectedDeploymentId: number;
  
  ngOnInit() {
    this.getDeployments();
  }

  getDeployments() {

    this.deploymentService.getDeployments()
      .subscribe(deployments => {
        console.log('subscribe');
        console.log(deployments);
        this.deployments = deployments;
        this.selectedDeployment = this.deployments[0];  
        console.log('selected id is ' + this.selectedDeployment._id);
      });
    }

  handleSelectionMade(appDeployed: Deployment) {
    this.selectedDeployment = appDeployed;   
    this.selectedDeploymentId = appDeployed._id; 
  }

  handleClearClick() {
    this.selectedDeployment = null;  
    this.selectedDeploymentId = 0;  
  }

  handleEditClick() {
    alert('Edit Clicked');
  }

  getSelectionClass(id:number) {
    return id === this.selectedDeploymentId ? "selectedButton" : "unselectedButton";
  }

}
