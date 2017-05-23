import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Jsonp} from '@angular/http';

import 'rxjs/add/operator/map';

const URL: string = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page='

@Injectable()
export class RequestService {
    constructor(private jsonp: Jsonp) {
    }

    public data: {} = {};
    public page: number = 1;

    public search(searchterm: string, page?: number): any {
        let apiLink = URL + page +  '&place_name=' + searchterm + '&callback=JSONP_CALLBACK';
        return this.jsonp.get(apiLink)
            .map((res: Response) => {
                this.data = res.json().response; // let data.next()
                console.log(this.data);
                this.dataPasser();
                return this.data;
            });
    }
    public dataPasser(): {} {
        return this.data;
    }

}