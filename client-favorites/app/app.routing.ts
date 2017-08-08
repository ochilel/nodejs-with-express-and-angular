import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesListComponent } from './components/favorites-list.component';
import { FavoriteDetailComponent } from './components/favorite-detail.component';

const appRoutes: Routes = [
    {path: '', component: FavoritesListComponent},
    {path: 'favorite/:id', component: FavoriteDetailComponent},
    {path: '**', component: FavoritesListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);