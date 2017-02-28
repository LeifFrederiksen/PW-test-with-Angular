"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// import { FormsModule } from '@angular/forms';
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
var custom_reuse_strategy_1 = require("./shared/router/custom-reuse-strategy");
var product_module_1 = require("./products/product.module");
var pw_module_1 = require("./pw/pw.module");
var tabnavigator_component_1 = require("./tabnavigator/tabnavigator.component");
var material_1 = require("@angular/material");
require("../node_modules/hammerjs/hammer.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule,
            material_1.MaterialModule,
            product_module_1.ProductModule,
            pw_module_1.PWModule,
            router_1.RouterModule.forRoot([
                { path: '**', component: welcome_component_1.WelcomeComponent }
            ])],
        declarations: [app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            tabnavigator_component_1.TabNavigator
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            { provide: router_1.RouteReuseStrategy, useClass: custom_reuse_strategy_1.CustomReuseStrategy },
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map