import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pm-tabnavigator',
    moduleId: module.id,
    templateUrl: 'tabnavigator.component.html',
    styleUrls: ['tabnavigator.component.css']
})
export class TabNavigator implements OnInit {
    pageTitle: string = 'Material Test';
    
    constructor(private router: Router) {   }

    ngOnInit(): void {
        
    }

    selectTab(index:number) {
        switch (index) {
            case 0: {
                console.log("launch home");
                this.router.navigate(['/']);
                break;
            }
            case 1: {
                console.log("launch folders");
                this.router.navigate(['/pwFolderNav']);
                break;
            }
            case 2: {
                console.log("launch search");
                this.router.navigate(['/pwSearchAll']);
                break;
            }
        }
    }
}


