import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storageService';
import {ITEMS} from "../../const/ITEMS_CONST";
import {SessionService} from "../../services/sessionService";

@Component({
    selector: 'pc-favorites',
    template: `
<h1> Favorites </h1>
<div *ngFor="let house of items" let index="index" routerLink="/details" (click)="getDetails(house)">
<img [src]=house.thumb_url>
<p> {{house.price | currency:'USD': true}} </p>
<p> {{house.title}} </p>
</div>
<pc-button [text]="homeButton" routerLink="/home"></pc-button>
`

})

export class FavoritesPageComponent implements OnInit {

    ngOnInit (): void {
        this.items = this.showFavorites();
        console.log(this.showFavorites());
    };

    constructor(private storageService: StorageService, private sessionService: SessionService) {
    }

    private homeButton: string = 'Home';
    public items: Array<any> = [];
    public item_types: any = ITEMS.TYPES;

    public showFavorites(): Array<any> {
        return this.storageService.getItem(this.item_types.HOUSE);
    };

    public getDetails (property: {}): void {
        return this.sessionService.getDetailedProperty(property);
    }
}