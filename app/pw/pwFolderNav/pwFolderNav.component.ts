import { Component,Input, Output, EventEmitter } from '@angular/core';
import { INavNode } from '../navnodes/navnode';
import { Globals } from '../../shared/globals';
import { IRepository } from '../repositories/repository';
import { PWFolderNavService } from './pwFolderNav.service';

@Component({
    moduleId: module.id,
    providers: [ PWFolderNavService ],
    templateUrl: 'pwFolderNav.component.html?v=' + Globals.getInstance().version
})
export class PWFolderNavComponent {
    pageTitle: string = 'PW Folder Navigation';

    constructor() {

    }

    getCurrentRepository() : IRepository {
        return Globals.getInstance().getRepository();
    }

    // currentNavNode: INavNode;

    // @Output() currentNavNodeEmitter: EventEmitter<INavNode> = new EventEmitter<INavNode>();

    // @Output() selectedNavNode: INavNode;

    @Input()
    set currentNavNode(navNode: INavNode) {
        console.log("mother In selectedNavNode: " + navNode)
    }

    setNavNodeShowDocuments(navNode: INavNode):void {
        console.log("PW  setNavNode");
        // this.currentNavNode = navNode;
       // this.currentNavNodeEmitter.emit(this.currentNavNode);
    }
}