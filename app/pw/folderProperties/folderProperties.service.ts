
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { IRepository } from '../repositories/repository';
import { INavNode } from '../navnodes/navnode';
import { IProperty, Property, IPropertyPair, PropertyPair, PropertyType } from './property';
import { Globals } from '../../shared/globals';

@Injectable()
export class FolderPropertiesService {

    private _baseUrl = Globals.getInstance().getBaseUrl();
    private _schema = "PW_WSG";

    constructor(private _http: Http) { }

    getFolderProperties(repository: IRepository, navNodeId: string) {
        var dataUrl = this._baseUrl + "/repositories/" + repository.instanceId + "/" + this._schema + "/Project?";

        dataUrl += "$select=*,ProjectProjectType!poly-forward-ProjectType!poly.*";
        dataUrl += "&$filter=$id+in+['" + navNodeId + "']";

        return this._http.get(dataUrl).map(
            (response: Response) => { return this.mapProperties(response) }
        )
    }

    mapProperties(response: Response): IProperty {
        return this.toProperty(response.json().instances[0]);
    }

    toProperty(element: any): IProperty {
        let property = new Property(
            element.instanceId,
            element.properties.Description,
            element.properties
        );
            
        if (element.relationshipInstances.length > 0) {
            property.setCustomProps(element.relationshipInstances[0].relatedInstance.properties);
        }

        property.addStandardProp("Created Time",property.standardProps["CreateTime"],PropertyType.DateTime);
        property.addStandardProp("Update Time",property.standardProps["UpdateTime"],PropertyType.DateTime);
        property.addStandardProp("Description",property.standardProps["Description"],PropertyType.String);
        property.addStandardProp("Name",property.standardProps["Name"],PropertyType.String);
        property.addStandardProp("Label",property.standardProps["Label"],PropertyType.String);
        property.addStandardProp("Project?",property.standardProps["IsRichProject"],PropertyType.Boolean);

        for (let name in property.getCustomProps()) {
            if (property.getCustomProps().hasOwnProperty(name)) {
                property.addCustomProp(name, property.getCustomProps()[name],PropertyType.String);
            }
        }

        return property;
    }
}
