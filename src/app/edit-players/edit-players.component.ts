import { Component, OnInit, Input} from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-players',
  templateUrl: './edit-players.component.html',
  styleUrls: ['./edit-players.component.scss'],
  providers: [PlayerService]
})
export class EditPlayersComponent implements OnInit {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
  editFormShow = false;

  editClicked() {
    this.editFormShow = true;
  }

  editCancel() {
    this.editFormShow = false;
  }

  beginUpdatingPlayer(playerToUpdate) {
    this.playerService.editPlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete){
    if(confirm("Are you sure you want to delete this player from the list?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
