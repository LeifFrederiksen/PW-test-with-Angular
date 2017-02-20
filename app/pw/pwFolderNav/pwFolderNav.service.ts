import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { INavNode } from "../navnodes/navnode";

export class NavNodeNavigation {
    private navNode: INavNode;
    private add: boolean;

    constructor(navNode:INavNode,add:boolean) {
        this.navNode = navNode;
        this.add = add;
    }

    public getNavNode():INavNode {
        return this.navNode;
    }

    public doAdd():boolean {
        return this.add;
    }
}

@Injectable()
export class PWFolderNavService {

    private navNodeNavigation: NavNodeNavigation;
    private navNodeNavigationSource = new Subject<NavNodeNavigation>();
    navNode$ = this.navNodeNavigationSource.asObservable();

    setNavNodeNavigation(navNodeNavigation: NavNodeNavigation) {
        console.log("in setNavNodeNavigation: " + navNodeNavigation.getNavNode().properties["Description"])
        this.navNodeNavigationSource.next(navNodeNavigation);
    }
}