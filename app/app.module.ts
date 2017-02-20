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

@NgModule({
  imports:      [   BrowserModule, 
                    HttpModule,
                    ProductModule,
                    PWModule,
                    RouterModule.forRoot([
                        { path: '**', component: WelcomeComponent }
                    ]) ],
  declarations: [   AppComponent, 
                    WelcomeComponent
                    
                    // ,
                    

                    ],
  bootstrap: [ AppComponent ],
  
  providers: [
	                {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
        	]
  
})
export class AppModule { }
