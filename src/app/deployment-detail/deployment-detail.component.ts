import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deployment, DeploymentService } from '../models'

@Component({
  selector: 'deployment-detail',
  templateUrl: './deployment-detail.component.html',
  styleUrls: ['./deployment-detail.component.css']
})
export class DeploymentDetailComponent implements OnInit {
  @Input() selectedDeployment: Deployment;
  private currentDeployment: Deployment;
  private servers
  private viewMode: boolean = true;
  private editMode: boolean = false;

  constructor(private deploymentService:DeploymentService, 
    private route:ActivatedRoute) { }

  ngOnInit() {
     // this.getDeployment(+this.route.snapshot.params['id']);
  }

  getServers() {
    
        this.deploymentService.getServers()
          .subscribe(servers => {
            console.log('subscribe');
            console.log(servers);
            this.servers = servers;
            console.log('servers contains ' + JSON.stringify(this.servers));
          });
        }
    

  handleEditClick(selectedDeployment: Deployment) {
    this.viewMode = false;
    this.editMode = true;
    console.log('getServers()');
    this.getServers();
  }

  goBack() {
    this.viewMode = true;
    this.editMode = false;
  }

  save() {
    alert('saving changes....');
    this.viewMode = true;
    this.editMode = false;
  }

  isSelectedServer(serverName: string) {
    console.log('serverName is: ' + serverName);
    console.log('currentDeyployment.serverName is: ' + this.currentDeployment.serverName);
    return this.currentDeployment.serverName === serverName ? 'selected' : '';
  }


  // getDeployment(id:number) {

  //     this.deploymentService.getDeployments()
  //       .subscribe(deployments => {
  //         this.deployments = deployments;
  //         this.selectedDeployment = this.deployments[0];  
  //       });
  
  // this.deploymentService.getDeployments()
  //     .subscribe(deployments => {
  //       this.deployments = deployments;
  //       this.selectedDeployment = this.deployments[0];  
  //     });
  //   }



}
