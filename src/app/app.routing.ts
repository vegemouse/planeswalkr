import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from './player-list/player-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'player-list',
    component: PlayerListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
