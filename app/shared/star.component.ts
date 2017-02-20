import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick() {
        console.log("clicked")
        this.ratingClicked.emit(`Rating clicked: ${this.rating} was clicked.`);
        
    }
}