
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IRepository } from './repository';
import { Repository } from './repository';

@Injectable()
export class RepositoryService {
    private _baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
    
    private _dataUrl = this._baseUrl + "/repositories";
   
    constructor (private _http: Http) {}

    getRepositories(): Observable<IRepository[]> {
        console.log("In getRepositories");

        var headers = new Headers();
       //  headers.append('Accept', 'application/json;odata=verbose');
       // headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');

        return this._http.get(this._dataUrl /*, { headers: headers} */).map(
                        (response: Response) => { return this.mapRepositories(response) }
        )
    }

    mapRepositories(response: Response): IRepository[] {
         return response.json().instances.map(this.toRepository)
    }

    toRepository(element:any): IRepository{
        let repository = <Repository>({
            instanceId: element.instanceId,
            properties: element.properties
        });

        return repository;
    }

    private handleError(error: Response) {
        console.log("Error: " + error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
