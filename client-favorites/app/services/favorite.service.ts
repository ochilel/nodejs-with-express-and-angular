import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Favorite } from '../models/favorite';

@Injectable()
export class FavoriteService{
    public url: string;
    
    constructor(private _http: Http) {
        this.url = 'http://localhost:3100/api/';
    }

    getFavorites(){
        return this._http.get(this.url+'favorites')
                        .map(res => res.json());
    }
}