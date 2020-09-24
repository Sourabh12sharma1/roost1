import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AppConstants } from '../app.constants';
const httpOptions: Object = new HttpHeaders({
    'Content-Type': 'application/json; charset = UTF-8',
    'Upgrade-Insecure-Requests': '1',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
});

@Injectable({
    providedIn: 'root'
})

export class ContentService {
    baseURL: string
    d : any
    constructor(
        private http: HttpClient,
        public appConstants: AppConstants
    ) {
        this.baseURL = this.appConstants.baseURL
    }
    getData(url: any) {
        return this.http.get(url, httpOptions);
    }
    postData(url: any, data?: any) {
        return this.http.post(url, data, httpOptions);
    }
}