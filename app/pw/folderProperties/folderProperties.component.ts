import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IProperty, IPropertyPair } from './property';
import { FolderPropertiesService } from './folderProperties.service';
import { Globals } from '../../shared/globals';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'folderProperties.component.html?v=' + Globals.getInstance().version
})
export class FolderPropertiesComponent implements OnInit {
    pageTitle: string = 'Properties';
    properties: IProperty;

    errorMessage: string;

    navNodeId: string;
    
    constructor(private _route: ActivatedRoute, private _router: Router, private _dataService: FolderPropertiesService, private _location:Location) { 
        
        console.log("activeted via routex:  " + _route);
        
        this.navNodeId = _route.params["value"]["id"];
    }

    ngOnInit() { 
        this.loadProperties(this.navNodeId);
    }

    loadProperties(navNodeId:string): void {
        console.log("start prop loading");
        // this.toggleLoadingLayer(true);

        var searcher = this._dataService.getFolderProperties(Globals.getInstance().getRepository(), this.navNodeId);
        
        searcher.subscribe(
                                    properties => { this.properties = properties ;
                                                        },
                                    error => this.errorMessage = <any>error,
                                    () => { 
                                                // this.toggleLoadingLayer(false);
                                             }
                                    );
    }

    onBack():void {
        // this._router.navigate(['/pwFolderNav']);
        this._location.back();

    }
}