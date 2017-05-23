import {Injectable} from '@angular/core';
import {RequestService} from "./requestService";
import { Response } from '@angular/http';

@Injectable()
export class DataFlowService {

    constructor(private requestService: RequestService) {
    }

    private data: {};
    private currentPage: number = 1;
    private currentLocation: string = '';
    private totalPages: null = null;
    public page: number;

    public catchData (value: any): void {
        return this.data = value;
    }


    public getOptions(type: string): void {
        return this.data[type] || [];
    }

    public getCounts(type: string): void {
        return this.data[type] || 0;
    }

    public getData(location: string, page: number) {
        this.page = page || 1;
        this.requestService.search(this.currentLocation, this.page).subscribe((res: Response) => {
            this.data = res;
                this.currentLocation = location;
                // this.totalPages = this.data;
        });
    }
    public showMoreResults(location: string) {
        this.currentLocation = location || this.currentLocation;
        this.currentPage++;
        return this.getData(this.currentLocation, this.currentPage);
    };


}