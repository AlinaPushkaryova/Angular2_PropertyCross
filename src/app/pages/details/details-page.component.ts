import {Component} from '@angular/core';
import {SessionService} from '../../services/sessionService';
import {DataStorageService} from "../../services/dataStorageService";

@Component({
    selector: 'pc-details',
    template: `
<p> House details</p>
<div>
<img [src]=getDetails().img_url>
<p> {{getDetails().price | currency:'USD': true}}</p>
<p> {{getDetails().title}}</p>
<p> {{getDetails().bedroom_number}} bed, {{getDetails().bathroom_number}} bathroom</p>
<p> {{getDetails().summary}}</p>
<pc-button [text]="homeButton" routerLink="/home"></pc-button>
<pc-button [text]="favoritesButton" routerLink="/favorites"></pc-button>
<button type="button" (click)="toggleHouse(getDetails())">{{itemIndex !== -1 ? '-' : '+'}} </button>
</div>

`
})

export class DetailsPageComponent {
    constructor(private sessionService: SessionService, private dataStorageService: DataStorageService) {
    }


    public detailedProperty: {};
    private homeButton: string = 'Home';
    private favoritesButton: string = 'Favorites';
    private itemIndex: number = null;

    public getDetails(): {} {
        this.detailedProperty = this.sessionService.dataPasser();
        this.buttonSwitcher();
        return this.detailedProperty;
    }

    private toggleHouse(): void {
        this.itemIndex = this.dataStorageService.setFaveItems(this.detailedProperty);
    }

    private buttonSwitcher(): void {
        this.itemIndex = this.dataStorageService.findItem(this.detailedProperty);
    }



}