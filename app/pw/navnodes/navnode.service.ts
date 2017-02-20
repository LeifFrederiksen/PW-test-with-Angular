
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { IRepository } from '../repositories/repository';
import { INavNode } from './navnode';
import { NavNode } from './navnode';

@Injectable()
export class NavNodeService {
    private _baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
    private _schema = "NAVIGATION";
    private _repository: string = "Bentley.PW--PWSRV.ad.m.dk~3AMetro";

// https://pwapp.metroselskabet.dk/bwsg/v2.4/repositories
   
    constructor (private _http: Http) {}

    getRootNavNodes(repository: IRepository ): Observable<INavNode[]> {
        debugger;
        return this.getNavNodes(repository, null, false);
    }

    getNavNodes(repository: IRepository, parent: INavNode, loadDocuments: boolean ): Observable<INavNode[]> {
        console.log("In getNavNodes - got this repo: " + repository.instanceId);

        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/NavNode";

        if (parent != null) {
            dataUrl += "/" + parent.instanceId + "/NavNode";
        }

        if (!loadDocuments) {
            dataUrl += "?$filter=Key_ClassName+eq+'Project'";
        }
        
        console.log("DataUrl: " + dataUrl);
        var headers = new Headers();

       // headers.append('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8');

        return this._http.get(dataUrl, { headers: headers}).map(
                        (response: Response) => { return this.mapNavNodes(response) }
        )
    }

    mapNavNodes(response: Response): INavNode[] {
         return response.json().instances.map(this.toNavNode);
    }

    toNavNode(element:any): INavNode{
        // console.log("toNavNode: " + element);

        let navNode = new NavNode(
            element.instanceId,
            element.properties);
        
        // console.log('Parsed navnode:', navNode);
        
        return navNode;
    }

    private handleError(error: Response) {
        console.log("Error: " + error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
