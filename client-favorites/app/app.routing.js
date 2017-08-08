"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favorites_list_component_1 = require("./components/favorites-list.component");
var favorite_detail_component_1 = require("./components/favorite-detail.component");
var appRoutes = [
    { path: '', component: favorites_list_component_1.FavoritesListComponent },
    { path: 'favorite/:id', component: favorite_detail_component_1.FavoriteDetailComponent },
    { path: '**', component: favorites_list_component_1.FavoritesListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map