import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IRepository } from '../repositories/repository';
import { RepositoryService } from '../repositories/repository.service';
import { DocumentService } from '../documents/document.service';
import { Globals } from '../../shared/globals';

@Component({
    moduleId: module.id,
    templateUrl: 'pwSearchAll.component.html?v=' + Globals.getInstance().version
})
export class PWSearchAllComponent {
    pageTitle: string = 'Search';
    documentDescriptionSearchValue: string;

    constructor (public formBuilder: FormBuilder) {}

    public searchForm = this.formBuilder.group({
        formDocumentDescriptionSearchValue: [""]
    });

    getCurrentRepository() : IRepository {
        return Globals.getInstance().getRepository();
    }

    doSearch(event: Event) {
        this.documentDescriptionSearchValue = this.searchForm.controls.formDocumentDescriptionSearchValue.value;
    }
}