import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorite';

@Component({
    selector: 'favorites-list',
    templateUrl: 'app/views/favorites-list.html',
    providers: [
        FavoriteService
    ]
})

export class FavoritesListComponent implements OnInit{
    public title: string;
    public favorites: Favorite[];
    public errorMessage;

    constructor(
        private _favoriteService: FavoriteService
    ){
        this.title = 'Listado de favoritos';
    }

    ngOnInit(){
        this._favoriteService.getFavorites().subscribe(
            result => {
                this.favorites = result.favoritos;
                if(!this.favorites){
                    alert('Error en el servidor');
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null){
                    alert('Error en la petición');
                }
            }
        );
    }
}