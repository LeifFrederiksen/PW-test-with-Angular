import {Injectable} from '@angular/core';
import {Store} from './redux/store';
import { INavNode } from '../navnodes/navnode';

@Injectable()
export class TreeNodeService{
  constructor(private _store:Store){
  }
  loadTreeNodes(root:INavNode){
    // if(root.url) {
        let key = root ? root.instanceId : null;
      this._store.dispatchAction({key: key, node: root, name: 'LOAD_NODES'});
    // }
  }
}