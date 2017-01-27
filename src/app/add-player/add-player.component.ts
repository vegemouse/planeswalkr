import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  providers: [PlayerService]
})
export class AddPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, phoneNumber: string, email: string, formats: string, skillLevel: string, proxyFriendly: string, image: string, location: string) {

    var formatsArray = formats.split(', ');

    var proxyBool;
    if (proxyFriendly === "true") {
      proxyBool = true;
    } else if (proxyFriendly === "false") {
      proxyBool = false;
    }

    var newPlayer: Player = new Player(name, phoneNumber, email, formatsArray, skillLevel, proxyBool, image, location)

    this.playerService.addPlayer(newPlayer);
  }

}


// newName.value,
// newPhoneNumber.value,
// newEmail.value,
// newFormats.value,
// newSkillLevel.value,
// newProxyFriendly.value,
// newImage.value,
// newLocation.value
