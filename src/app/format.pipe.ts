import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'format',
  pure: false
})

export class FormatPipe implements PipeTransform {

  transform(input: Player[], desiredFormat) {
    var output: Player[] = [];
    if (desiredFormat === "EDH") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "EDH"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredFormat === "Standard") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "Standard"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredFormat === "Modern") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "Modern"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredFormat === "Vintage") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "Vintage"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredFormat === "Pauper") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "Pauper"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else if (desiredFormat === "Legacy") {
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].formats.length; j++) {
          if (input[i].formats[j] === "Legacy"){
            output.push(input[i]);
          }
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
