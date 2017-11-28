import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Deployment, Server } from './index';
import { CONFIG } from '../core';

let deploymentsUrl = CONFIG.baseUrls.deployments;
let serversUrl = CONFIG.baseUrls.servers;

@Injectable()
export class DeploymentService {

    constructor(
        private http: Http
    ) {}

    getServers():Observable<Server[]> {
        console.log('retrieving deployments from ' + deploymentsUrl);
        return <Observable<Server[]>>this.http
          .get(serversUrl)
          .map(response => response.json());
        }

    getDeployments():Observable<Deployment[]> {
        console.log('retrieving deployments from ' + deploymentsUrl);
        return <Observable<Deployment[]>>this.http
          .get(deploymentsUrl)
          .map(response => response.json());
        }

    getDeployment(id:number) :Observable<Deployment> {
        console.log('retrieving deployment from ' + deploymentsUrl);
        return this.getDeployments()
            .map(deployments => deployments.find(deployment=>deployment._id===id));
        }
    
        private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json ? res.json() : null;
        return <T>(body && body.data || {});
        }
        
                

}
