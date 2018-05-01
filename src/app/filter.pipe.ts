import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: any, name: any): any {
    if(name === undefined)return games;
    return games.filter(function(game){
      return game.game.toLowerCase().includes(name.toLowerCase());
    }
   
  )} 
}