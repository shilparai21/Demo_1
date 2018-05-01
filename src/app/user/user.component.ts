import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import {FormsModule} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
   

   

name :string ='deus Ex: Mankind Divided';
  welcome : string;
  username : string;
  games : [{
      game: string,
      platform : string,
      release : string
  }];
  constructor(){
    this.welcome = "Display List using ngFor in Angular 2"

    this.games = [{
        game : "deus Ex: Mankind Divided",
        platform: " Xbox One, PS4, PC",
        release : "August 23"
    },
    {
        game : "Hue",
        platform: " Xbox One, PS4, Vita, PC",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    },
    {
        game : "The Huntsman: Winter's Curse",
        platform: "PS4",
        release : "August 23"
    }]
};

ngAfterViewInit() {
    $(document).ready(function() {
        alert("sdjdhsjh'");
        //$('#option-droup-demo').multiselect();
    });
}

}
