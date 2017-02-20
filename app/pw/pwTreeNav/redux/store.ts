import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import {TreeNode} from '../tree-node';
import {treeNodeReducer} from './tree-node-reducer';
import { NavNodeService } from '../../navnodes/navnode.service';
import { Globals } from '../../../shared/globals';
import { INavNode } from '../../navnodes/navnode';

import { LoadingIndicator } from '../../../shared/loadingindicator/loadingindicator.component';


@Injectable()
export class Store{

  private dispatcher = new Subject();
  private navNodes = {};

  errorMessage: string;

  

  showLoadingLayer: boolean = false;

  // constructor(private _http:Http){
  constructor(private navNodeService:NavNodeService){
    this.dispatcher.subscribe((action) => this.handleAction(action));
  }

  private handleAction(action:any) {
    if(action.name === 'LOAD_NODES') {
      if (this.navNodes[action.key]) {
        this.navNodes[action.key].next(this.navNodes[action.key]);
      }
      else {
let navNode: INavNode = action.node;
        var searcher = this.navNodeService.getNavNodes(Globals.getInstance().getRepository(),navNode,false);
                searcher.subscribe(
                                    navnodes => { this.navNodes = navnodes;
                                      debugger;
                                                 },
                                    error => { this.errorMessage = <any>error; 
                                                this.toggleLoadingLayer(false);
                                                },
                                    () => { this.toggleLoadingLayer(false); }
                                    );

        /*
        this._http
            .get(action.url)
            .map((res:Response) => res.json())
            .subscribe(res => {
              this.nodes[action.key] = treeNodeReducer(res, action);
              this.treeNodes[action.key].next(this.nodes[action.key]);
            });
        */

      }
    }
  }

  getTreeNodes(key:string){
    debugger;
    if(!this.navNodes.hasOwnProperty(key)){
      this.navNodes[key] = new Subject();
    }
    return this.navNodes[key].asObservable();
  }

  dispatchAction(action:any){
    this.dispatcher.next(action);
  }

      toggleLoadingLayer(show: boolean) {
        this.showLoadingLayer = show;
    }
}