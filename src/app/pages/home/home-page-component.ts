import {Component} from '@angular/core';
import {DATA} from "../../const/DATA_CONST";
import {RequestService} from '../../services/requestService';
import {DataFlowService} from '../../services/dataFlowService';
import {SessionService} from '../../services/sessionService';
import {DataStorageService} from "../../services/dataStorageService";

@Component({
    selector: 'pc-home',
    template: `
<pc-header></pc-header>
<pc-button [text]="favesButton" routerLink="/favorites"></pc-button>
<h3> Use the form below to search for houses to buy. You can search by place-name, postcode, or click 'My location',
 to search in your current location!</h3>
<input type="text" #propertyName (keyup.enter)="letSearch(propertyName.value)">
 <pc-button [text]="goButton" (click)="letSearch(propertyName.value)"> </pc-button>
 <p> Search Result: </p> 
 <p *ngFor="let searchResult of getSearches()" (click)="recentSearch(searchResult)">{{searchResult}} </p>
 <p> Displaying {{getListing().length + listing}} of {{getTotalResult()}}</p>
 <div *ngFor="let property of getListing()" routerLink="/details" (click)="getDetails(property)"> 
<img [src]=property.thumb_url>
<p> {{property.price | currency:'USD': true}}</p>
<p> {{property.title}}</p>
</div>
<pc-button *ngIf="showButton" [text]="showMoreResult" (click)="showMoreResults()"></pc-button>
`
})

export class HomePageComponent {

    constructor(private requestService: RequestService, private dataFlowService: DataFlowService,
                private sessionService: SessionService, private dataStorageService: DataStorageService) {
    }

    public data: any;
    private goButton: string = 'Go';
    private showMoreResult: string = 'Show More Results';
    private favesButton: string = 'Faves';
    private data_types: any = DATA.TYPES;
    private showButton: boolean = false;
    private listing: number = 0;
    private locationName: string;

    public letSearch(value: string): any {
        this.listing = 0;
        this.requestService.search(value)
            .subscribe((data: any) => this.data = data);
        this.dataStorageService.setRecentSearch(value);
        this.dataFlowService.catchData(this.data);
        this.locationName = value;
    }

    public recentSearch(recentSearch: string): any {
        this.listing = 0;
        this.letSearch(recentSearch);
    };

    public catch(): {} {
        this.data = this.requestService.dataPasser();
        this.dataFlowService.catchData(this.data);
        return this.data;
    }

    public getDetails(property: {}): void {
        return this.sessionService.getDetailedProperty(property);
    }

    public getListing(): any {
        this.catch();
        this.getTotalPages() > 0 ? this.showButton = true : this.showButton = false;
        return this.dataFlowService.getOptions(this.data_types.LISTINGS);
    }

    public getTotalPages(): any {
        return this.dataFlowService.getCounts(this.data_types.TOTAL_PAGES);
    }

    public showMoreResults(): void {
        this.listing = this.getListing().length + this.listing;
        this.dataFlowService.showMoreResults(this.locationName);
    }

    public getTotalResult(): void {
        return this.dataFlowService.getCounts(this.data_types.TOTAL_RESULTS);
    }

    public getSearches(): Array<any> {
        return this.dataStorageService.getRecentSearches();
    }
}


