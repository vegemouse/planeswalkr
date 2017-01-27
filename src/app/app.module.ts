import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { SkillLevelPipe } from './skill-level.pipe';
import { AdminComponent } from './admin/admin.component';
import { EditPlayersComponent } from './edit-players/edit-players.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeComponent,
    PlayerListComponent,
    PlayersComponent,
    PlayerComponent,
    AddPlayerComponent,
    SkillLevelPipe,
    AdminComponent,
    EditPlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
