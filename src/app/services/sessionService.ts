import {Injectable} from '@angular/core';

@Injectable()
export class SessionService {

    public property: {};

    public getDetailedProperty(value: {}): void {
        this.property = value;
    }

    public dataPasser(): {} {
        return this.property;
    }

}
