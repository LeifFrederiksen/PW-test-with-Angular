import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { Globals } from '../../shared/globals';

@Component({
    selector: 'ai-loadingindicator',
    moduleId: module.id,
    templateUrl: 'loadingindicator.component.html?v=' + Globals.getInstance().version,
    styleUrls: ['loadingindicator.component.css?v=' + Globals.getInstance().version]
})
export class LoadingIndicator  {
    @Input() showLoadingIndicator: boolean;
}