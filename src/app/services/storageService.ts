import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {
    public setItem(key: any, item: {}): void{
    localStorage.setItem(key, JSON.stringify(item));
};

    public getItem(key: any): any {
    return JSON.parse(localStorage.getItem(key));
};

}