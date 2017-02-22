import { Component, Optional, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IRepository } from '../repositories/repository';
import { INavNode } from '../navnodes/navnode';
import { IDocument, Document } from './document';
import { DocumentService } from './document.service';
import { PWFolderNavService, NavNodeNavigation } from '../pwFolderNav/pwFolderNav.service';
import { Globals } from '../../shared/globals';
import { FormControl } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'pm-documents',
    moduleId: module.id,
    templateUrl: 'document-list.component.html?v=' + Globals.getInstance().version
})
export class DocumentListComponent implements OnInit {
    pageTitle: string = 'Documents';
    documentDescriptionSearch: string;
    descriptionFilterBy: string;
    descriptionFilterByControl = new FormControl();

    documentCodeFilterBy: string;
    documents: IDocument[];
    errorMessage: any;
    showLoadingLayer: boolean = false;
    subscription: Subscription;

    currentNavNode: INavNode;

    constructor(private _dataService: DocumentService, @Optional() private pwFolderNavService: PWFolderNavService) {  
                console.log("In doclist-list.component.ts");
        if (pwFolderNavService) {
                this.subscription = pwFolderNavService.navNode$.subscribe(navNodeNavigation => { 
                        console.log("in doc list. navnode is: " + navNodeNavigation.getNavNode().properties["Description"])
                        if (navNodeNavigation) this.getDocumentsInNavNode(navNodeNavigation);
                    });
        }
    }

    @Input()
    set globalSearchText(searchValue: string) {
        console.log("document-list.component set globalSearchText: " + searchValue);
        if (!searchValue) return;

        // let document = <Document>({
        //     documentCode: "element.instanceId",
        //     instanceId: "element.instanceId",
        //     description: "element.properties.Description",
        //     properties: null
        // });
        // this.documents = new Array();
        // this.documents.push(document);
        this.startGlobalSearch(searchValue);
    }

    ngOnInit() {
        this.descriptionFilterByControl.valueChanges.debounceTime(500).distinctUntilChanged().subscribe(value => this.descriptionFilterBy = value);
    }

    getDocumentsInNavNode(navNodeNavigation: NavNodeNavigation): void {
        console.log("start search");
        this.toggleLoadingLayer(true);
        
        var searcher = this._dataService.getDocumentsInNavNode(Globals.getInstance().getRepository(), navNodeNavigation.getNavNode());

        this.subscribeSearcher(searcher, navNodeNavigation);

    }

    getNumberOfDocuments():number {
        return this.documents ? this.documents.length : 0;
    }

    getPWUrl(document:IDocument) {
        return "pw://" + Globals.getInstance().getRepository().properties["Location"] + "/Documents/D{" + document.instanceId + "}";
    }

    openPW(document:IDocument) {
        window.location.href = this.getPWUrl(document);
    }

    startGlobalSearch(searchString: string): void {
        this.toggleLoadingLayer(true);
        
        var searcher = this._dataService.getDocumentsByDescription(Globals.getInstance().getRepository(), searchString);

        this.subscribeSearcher(searcher,null);
    }

    subscribeSearcher(searcher: Observable<IDocument[]>, navNodeNavigation: NavNodeNavigation) {
        searcher.subscribe(
                                    documents => {
                                                        if (navNodeNavigation && navNodeNavigation.doAdd()) {
                                                            console.log("adding");
                                                            if (!this.documents) {
                                                                this.documents = new Array<IDocument>();
                                                            }
                                                            for (let d = 0; d < documents.length; d++) {
                                                                this.documents.push(documents[d]);    
                                                            }
                                                        } else {
                                                            console.log("not adding");
                                                            this.documents = documents;
                                                        }
                                                    },
                                    error => { this.errorMessage = <any>error; 
                                                this.toggleLoadingLayer(false);
                                                },
                                    () => { this.toggleLoadingLayer(false); }
                            );
    }

    toggleLoadingLayer(show: boolean) {
        this.showLoadingLayer = show;
    }

    openDocument(document: IDocument) {
        this._dataService.downloadDocument(Globals.getInstance().getRepository(), document);
    }
}


