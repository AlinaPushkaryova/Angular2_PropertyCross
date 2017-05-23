import {Injectable} from '@angular/core';
import {StorageService} from './storageService';
import {ITEMS} from "../const/ITEMS_CONST";

@Injectable()
export class DataStorageService {
    constructor(private storageService: StorageService) {

    }
    private items: any = ITEMS.TYPES;

    public getFaveItems(): any {
        return this.storageService.getItem(this.items.HOUSE) || [];
    }

    public setFaveItems(value: {}): number {
    let index        = this.findItem(value),
        currentItems = this.getFaveItems();

    index === -1 ?
        currentItems.push(value) :
        currentItems.splice(index, 1);

    this.storageService.setItem(this.items.HOUSE, currentItems);
    return this.findItem(value);
}

    public findItem(item: any) {
    let items = this.getFaveItems(),
        index = -1;

    for (var i = 0; i < items.length; i++) {
        if (items[ i ].img_url === item.img_url) {
            index = i;
        }
    }
    return index;
}

    public getRecentSearches(): Array<any> {
    return this.storageService.getItem(this.items.SEARCHES) || [];
}

    public setRecentSearch(currentLocation: string): any {
    if (!currentLocation.length) {
        return false;
    }
    let recentSearch = this.getRecentSearches();
    if (recentSearch.length > 4) {
        recentSearch.pop();
    }
    recentSearch.unshift(currentLocation);

    this.storageService.setItem(this.items.SEARCHES, recentSearch);
    return recentSearch;

}




}