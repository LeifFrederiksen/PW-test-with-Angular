import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    selector: 'pm-welcome'
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
