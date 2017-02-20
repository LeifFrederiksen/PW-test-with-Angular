import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from './tree-node';
import {Store} from './redux/store';
import { Observable } from 'rxjs/Observable';
import {TreeNodeService} from './tree-node-service';

import { INavNode } from '../navnodes/navnode';
import { Globals } from '../../shared/globals';
import { IRepository } from '../repositories/repository';



@Component({
    moduleId: module.id,
  templateUrl:'pwTreeNav.component.html',
  selector:'tree-view'
})
export class PWTreeNavComponent implements OnInit{
  @Input() root:INavNode;
  children:any;
  items:INavNode[];
  subscription:any;

  constructor(private _store:Store, private _treeNodeService:TreeNodeService){
  }
  ngOnInit(){
      if (!this.root) {
        // this.root = new TreeNode('root','/app/pw/pwTreeNav/tree-view-data/countries.json', '');
        this.root = null;
      }

    // this.subscription = this._store.getTreeNodes(this.root).subscribe(res => {
    //                                             this.items = res;
    //                                             debugger;
    //                                             });
    // this._treeNodeService.loadTreeNodes(this.root);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

    getCurrentRepository() : IRepository {
        return Globals.getInstance().getRepository();
    }

}