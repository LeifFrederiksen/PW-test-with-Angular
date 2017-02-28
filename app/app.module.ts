import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router'
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { CustomReuseStrategy } from './shared/router/custom-reuse-strategy';

import { ProductModule } from './products/product.module';
import { PWModule } from "./pw/pw.module";

import { TabNavigator } from './tabnavigator/tabnavigator.component';

import { MaterialModule } from '@angular/material';
import '../node_modules/hammerjs/hammer.js';



@NgModule({
  imports:      [   BrowserModule, 
                    HttpModule,
                    MaterialModule,
                    ProductModule,
                    PWModule,
                    RouterModule.forRoot([
                        { path: '**', component: WelcomeComponent }
                    ]) ],
  declarations: [   AppComponent, 
                    WelcomeComponent,
                    TabNavigator
                    ],
  bootstrap: [ AppComponent ],
  
  providers: [
	                {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
        	]
  
})
export class AppModule { }