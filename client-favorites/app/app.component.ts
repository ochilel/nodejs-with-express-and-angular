import {Component} from '@angular/core';
 
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html' 
})
 
export class AppComponent {
    public title: string;
    public description: string;

    constructor() {
        this.title = 'APP Favoritos';
        this.description = 'Aplicacion web SPA para gestionar favoritos online';
    }
 }