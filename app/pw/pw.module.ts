import { NgModule } from '@angular/core';
import { PWFolderNavComponent } from './pwFolderNav/PWFolderNav.component';
import { PWSearchAllComponent } from './pwSearchAll/PWSearchAll.component';

import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { RepositoryListComponent } from "./repositories/repository-list.component";
import { NavNodeListComponent } from "./navnodes/navnode-list.component";
import { FolderPropertiesComponent } from "./folderProperties/folderProperties.component";
import { DocumentListComponent } from "./documents/document-list.component";
import { DocumentStringFieldFilterPipe } from "./documents/document-filter.pipe";
import { RepositoryService } from "./repositories/repository.service";
import { DocumentService } from "./documents/document.service";
import { NavNodeService } from "./navnodes/navnode.service";
import { FolderPropertiesService } from "./folderProperties/folderProperties.service";

@NgModule({
    declarations: [
                    PWFolderNavComponent, 
                    PWSearchAllComponent, 
                    RepositoryListComponent,
                    NavNodeListComponent,
                    FolderPropertiesComponent,
                    DocumentListComponent,
                    DocumentStringFieldFilterPipe 
    ],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild([
                        { path: 'pwFolderNav', component: PWFolderNavComponent },
                        { path: 'pwFolderProperties/:id', component: FolderPropertiesComponent },
                        { path: 'pwSearchAll', component: PWSearchAllComponent },

                    ]),
        SharedModule
    ],
    providers: [ RepositoryService, NavNodeService, DocumentService, FolderPropertiesService ]
    
})

export class PWModule {};
