

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { StarComponent } from "./star.component";
import { LoadingIndicator } from './loadingindicator/loadingindicator.component';

@NgModule ({
    declarations: [ StarComponent, LoadingIndicator ],
    imports: [ CommonModule ],

    exports: [ CommonModule, FormsModule, LoadingIndicator, StarComponent]
}) export class SharedModule{};