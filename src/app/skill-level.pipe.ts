import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'skillLevel',
  pure: false
})

export class SkillLevelPipe implements PipeTransform {

  transform(input: Player[], desiredSkillLevel) {
    var output: Player[] = [];
    if (desiredSkillLevel === "Beginner") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillLevel === "Beginner"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillLevel === "Intermediate") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillLevel === "Intermediate"){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSkillLevel === "Expert") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].skillLevel === "Expert"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
