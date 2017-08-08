"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var favorite_service_1 = require("../services/favorite.service");
var FavoriteDetailComponent = (function () {
    function FavoriteDetailComponent(_favoriteService, _route, _router) {
        this._favoriteService = _favoriteService;
        this._route = _route;
        this._router = _router;
    }
    FavoriteDetailComponent.prototype.ngOnInit = function () {
        this.getFavorite();
    };
    FavoriteDetailComponent.prototype.getFavorite = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._favoriteService.getFavorite(id).subscribe(function (response) {
                _this.favorite = response.favorito;
                if (!_this.favorite) {
                    _this._router.navigate(['/']);
                }
            }, function (error) {
                _this.errorMessage = error;
                if (_this.errorMessage != null) {
                    alert('Error en la petición');
                }
            });
        });
    };
    FavoriteDetailComponent = __decorate([
        core_1.Component({
            selector: 'favorite-detail',
            templateUrl: 'app/views/favorite-detail.html',
            providers: [
                favorite_service_1.FavoriteService
            ]
        }),
        __metadata("design:paramtypes", [favorite_service_1.FavoriteService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], FavoriteDetailComponent);
    return FavoriteDetailComponent;
}());
exports.FavoriteDetailComponent = FavoriteDetailComponent;
//# sourceMappingURL=favorite-detail.component.js.map