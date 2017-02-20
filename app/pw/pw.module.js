"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PWFolderNav_component_1 = require("./pwFolderNav/PWFolderNav.component");
var PWSearchAll_component_1 = require("./pwSearchAll/PWSearchAll.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/shared.module");
var repository_list_component_1 = require("./repositories/repository-list.component");
var navnode_list_component_1 = require("./navnodes/navnode-list.component");
var folderProperties_component_1 = require("./folderProperties/folderProperties.component");
var document_list_component_1 = require("./documents/document-list.component");
var document_filter_pipe_1 = require("./documents/document-filter.pipe");
var repository_service_1 = require("./repositories/repository.service");
var document_service_1 = require("./documents/document.service");
var navnode_service_1 = require("./navnodes/navnode.service");
var folderProperties_service_1 = require("./folderProperties/folderProperties.service");
var PWModule = (function () {
    function PWModule() {
    }
    return PWModule;
}());
PWModule = __decorate([
    core_1.NgModule({
        declarations: [
            PWFolderNav_component_1.PWFolderNavComponent,
            PWSearchAll_component_1.PWSearchAllComponent,
            repository_list_component_1.RepositoryListComponent,
            navnode_list_component_1.NavNodeListComponent,
            folderProperties_component_1.FolderPropertiesComponent,
            document_list_component_1.DocumentListComponent,
            document_filter_pipe_1.DocumentStringFieldFilterPipe
        ],
        imports: [
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild([
                { path: 'pwFolderNav', component: PWFolderNav_component_1.PWFolderNavComponent },
                { path: 'pwFolderProperties/:id', component: folderProperties_component_1.FolderPropertiesComponent },
                { path: 'pwSearchAll', component: PWSearchAll_component_1.PWSearchAllComponent },
            ]),
            shared_module_1.SharedModule
        ],
        providers: [repository_service_1.RepositoryService, navnode_service_1.NavNodeService, document_service_1.DocumentService, folderProperties_service_1.FolderPropertiesService]
    })
], PWModule);
exports.PWModule = PWModule;
;
//# sourceMappingURL=pw.module.js.map