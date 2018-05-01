import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform{
  transform(text: string, game: string) : string{
    if( game == game.toUpperCase()){
      return text.toLowerCase();
    }else{
      return text.toUpperCase();
    }
  }
}