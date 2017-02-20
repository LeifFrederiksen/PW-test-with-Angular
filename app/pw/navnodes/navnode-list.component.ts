import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

import { INavNode, NavNode } from './navnode';

import { NavNodeService } from './navnode.service';

import { PWFolderNavService, NavNodeNavigation } from '../pwFolderNav/pwFolderNav.service';

import { Globals } from '../../shared/globals';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'pm-navnodes',
    moduleId: module.id,
    inputs: [ 'someNavNode' ],
    templateUrl: 'navnode-list.component.html?v=' + Globals.getInstance().version,
    styleUrls: [ 'navnode-list.component.css' ]
})
export class NavNodeListComponent implements OnInit, OnChanges {
    pageTitle: string = 'Folder tree';
    navNodes: INavNode[];
    errorMessage: any;
    showLoadingLayer: boolean = false;

    someNavNode: INavNode;

    subscription: Subscription;

    // currentNavNode: INavNode;

    
    @Input() currentNavNode: INavNode;
    
    constructor(private _dataService: NavNodeService, private pwFolderNavService: PWFolderNavService) {   
        console.log("In navnode-list.component.ts");
    }

    navNodeShowDocuments(event: any, navNode: INavNode) {
        console.log("show docs" + navNode.properties["Description"]);
        this.navNodeShowDocumentsOfCurrentNavNode(navNode,false);
    }
    
    navNodeShowDocumentsAdd(event: any, navNode: INavNode) {
        console.log("show docs" + navNode.properties["Description"]);
        this.navNodeShowDocumentsOfCurrentNavNode(navNode,true);
    }

    navNodeShowDocumentsOfCurrentNavNode(navNode: INavNode, add:boolean) {
        this.pwFolderNavService.setNavNodeNavigation(new NavNodeNavigation(navNode,add));
    }

    resetRecursiveDocCounter():void {
        this.recursiveDocs = 0;
    }

    navNodeShowDocumentsRecursive(event: any, navNode: INavNode, numberOfDocs:number) {
        console.log("show docs recursive" + navNode.properties["Description"] + " number of docs: " + numberOfDocs);
        
        // this.recursiveDocs+= numberOfDocs;

        this.pwFolderNavService.setNavNodeNavigation(new NavNodeNavigation(navNode,true));

        // Get navnode children of this component
        var searcher = this._dataService.getNavNodes(Globals.getInstance().getRepository(), navNode, true);

        searcher.subscribe(
                                    navnodes => { 
                                                console.log("maybe  call checkChildren" + this.recursiveDocs + " of max " + this.recursiveDocMax);
                                                if (this.recursiveDocs < this.recursiveDocMax) {
                                                    console.log("gonna call checkChildren" + this.recursiveDocs + " of max " + this.recursiveDocMax);
                                                    this.recursiveDocs += this.checkChildren(navnodes,this.recursiveDocs);
                                                } else {
                                                    console.log("Got too much recusirve: " + this.recursiveDocs + " of max " + this.recursiveDocMax);
                                                }
                                                console.log("after checkchildren: " + this.recursiveDocs);
                                                 },
                                    error => { this.errorMessage = <any>error; 
                                                this.toggleLoadingLayer(false);
                                                },
                                    () => { this.toggleLoadingLayer(false); }
                                    );

    }

recursiveDocMax = 1000;
recursiveDocs = 0;

    checkChildren(children: INavNode[], numberOfDocs:number):number {
        console.log("In checkchildren. numberof docs: " + numberOfDocs);
        var grandChildren: INavNode[];
        numberOfDocs = 0;
        for (let child:number = 0; child < children.length && this.recursiveDocs < this.recursiveDocMax; child++) {
            console.log("in checkChildren. Child: " + children[child].properties["Description"]);
            // this.pwFolderNavService.setNavNodeNavigation(new NavNodeNavigation(children[child],true));

            if (children[child].properties["Key_ClassName"] == "Project") { 
                this.navNodeShowDocumentsRecursive(null, children[child],numberOfDocs);
            } else {
                numberOfDocs++;
                console.log("adding to numberOfDocs: " + numberOfDocs);
            }
        }

        return numberOfDocs;

    }

    // navNodeNavigateFolders(event: any, navNode: INavNode) {
    //     this.currentNavNode = navNode;
    //     this.loadNavNodes(this.currentNavNode, false);
    // }

    ngOnInit(): void {
        this.loadNavNodes(this.currentNavNode, false);
    }

    ngOnChanges(): void {
    }

    loadNavNodes(parent: INavNode, loadDocuments: boolean): void {
        console.log("start search");
        this.toggleLoadingLayer(true);

        var searcher = this._dataService.getNavNodes(Globals.getInstance().getRepository(), parent, loadDocuments);
        
        searcher.subscribe(
                                    navnodes => { this.navNodes = navnodes;
                                                 },
                                    error => { this.errorMessage = <any>error; 
                                                this.toggleLoadingLayer(false);
                                                },
                                    () => { this.toggleLoadingLayer(false); }
                                    );
    }

    showProperties(event: any, navNode: INavNode) {
        console.log("in navnode-list - call props for: " + navNode.properties["Key_InstanceId"]);
    }

    toggleLoadingLayer(show: boolean) {
        this.showLoadingLayer = show;
    }
}

