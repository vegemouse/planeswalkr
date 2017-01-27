import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'players/:id',
    component: PlayerComponent
  },
  {
    path: 'add-player',
    component: AddPlayerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
