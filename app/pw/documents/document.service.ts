
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


import { IRepository } from '../repositories/repository';
import { INavNode } from '../navnodes/navnode';
import { IDocument } from './document';
import { Document } from './document';

@Injectable()
export class DocumentService {
    private _baseUrl = "https://pwapp.metroselskabet.dk/bwsg/v2.4";
    private _schema = "PW_WSG";
    
// https://pwapp.metroselskabet.dk/bwsg/v2.4/repositories
   
    constructor (private _http: Http) {}

    getDocumentsInNavNode(repository: IRepository, navNode: INavNode): Observable<IDocument[]> {
        console.log("In getDocuments.");
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Project/" + navNode.properties["Key_InstanceId"] + "/PW_WSG.Document";

console.log("dataurl: " + dataUrl);
        return this._http.get(dataUrl).map(
                        (response: Response) => { return this.mapDocuments(response) }
        )
    }

  getDocumentsByDescription(repository: IRepository, description: String ): Observable<IDocument[]> {
        console.log("In getDocumentsByDescription");

        var operator: string = "like";
        // var operator: string = "eq";
        
        var filter: string = "$filter=Description+" + operator + "+'" + description + "'";

        filter+= "+and+IsLatest+eq+true";
        
        var top: number = 1000;
        filter+="&$top=" + top;

        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Document?" + filter;

        console.log("URL: " + dataUrl);

        return this._http.get(dataUrl).map(
                        (response: Response) => { return this.mapDocuments(response) }
        )
  }

  downloadDocument(repository:IRepository, document: IDocument) {
      // https://pwapp.metroselskabet.dk/bwsg/v2.4/Repositories/Bentley.PW--PWSRV.ad.m.dk~3AMetro/PW_WSG/document/9bb8aec4-2691-424f-bac5-bef2646d94d5/$file

        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Document/" + document.instanceId + "/$file";

        console.log("dataUrl for download: " + dataUrl);

        // window.open(dataUrl);
        window.location.href = dataUrl;
    }

    mapDocuments(response: Response): IDocument[] {
         return response.json().instances.map(this.toDocument)
    }

    toDocument(element:any): IDocument{
        // console.log("toDocument: " + element);

        let document = <Document>({
            documentCode: element.instanceId,
            instanceId: element.instanceId,
            description: element.properties.Description,
            properties: element.properties
        });
        // console.log('Parsed document:', document);
        
        return document;
    }

    private handleError(error: Response) {
        console.log("Error: " + error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
