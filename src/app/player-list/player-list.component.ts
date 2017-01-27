import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model'
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  providers: [PlayerService]
})

export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    console.log(this.players);
  }

  constructor(private router: Router, private playerService: PlayerService) {}

  goToPlayerPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  };
}


// public name: string,
// public phoneNumber: string,
// public email: string,
// public formats: string[],
// public skillLevel: string,
// public proxyFriendly: boolean
