import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoriteService } from '../services/favorite.service';
import { Favorite } from '../models/favorite';
 
@Component({
    selector: 'favorite-detail',
    templateUrl: 'app/views/favorite-detail.html' ,
    providers: [
        FavoriteService
    ]
})
 
export class FavoriteDetailComponent implements OnInit {
    public favorite: Favorite;
    public errorMessage;

    constructor(
        private _favoriteService: FavoriteService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this.getFavorite()
    }

    getFavorite(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._favoriteService.getFavorite(id).subscribe(
                response => {
                    this.favorite = response.favorito;
                    if(!this.favorite){
                        this._router.navigate(['/']);
                    }
                },
                error => {
                    this.errorMessage = <any>error;
                    if (this.errorMessage != null){
                        alert('Error en la petición');
                    }
                }
            );
        });
    }
 }