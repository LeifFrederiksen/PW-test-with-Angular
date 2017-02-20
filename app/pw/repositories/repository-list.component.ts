import { Component, Output, EventEmitter} from '@angular/core';
import { IRepository } from './repository';
import { RepositoryService } from './repository.service';

import { Globals } from '../../shared/globals';

@Component({
    selector: 'pm-repositories',
    moduleId: module.id,
    templateUrl: 'repository-list.component.html?v=' + Globals.getInstance().version
})
export class RepositoryListComponent /* implements OnInit */ {
    pageTitle: string = 'Select data source';
    repositories: IRepository[];

    errorMessage: any;

    showLoadingLayer: boolean = false;
    
    constructor(private _dataService: RepositoryService) {   }

    @Output() repositorySelector: EventEmitter<IRepository> = new EventEmitter<IRepository>();

    ngOnInit(): void {
        console.log("on init");
        this.toggleLoadingLayer(true);
        this._dataService.getRepositories().subscribe(
                                    repositories => {
                                        this.toggleLoadingLayer(false)
                                        this.repositories = repositories
                                    },
                                    error => {
                                        this.toggleLoadingLayer(false);
                                        this.errorMessage = <any>error;
                                    }
                                    );
    }

    repositorySelectorClicked(event: any, repository: IRepository) {
        this.repositorySelector.emit(repository);

        Globals.getInstance().setRepository(repository);
    }

    toggleLoadingLayer(show: boolean) {
        this.showLoadingLayer = show;
    }
}