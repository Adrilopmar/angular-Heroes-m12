import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {  MyDeckService,  TOPDECKS } from '../my-deck.service';
import { BoardGameService } from '../boardgame.service';
import { DialogTutorialComponent } from '../dialog-tutorial/dialog-tutorial.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-boardgame',
  templateUrl: './boardgame.component.html',
  styleUrls: ['./boardgame.component.css']
})
export class BoardgameComponent implements OnInit {

  title = this.AppComponent.title;
  userSavedDecks= this.MyDeckService.userSavedDecks;
  cardsOfDeck:any[]=[]
  cardsOfDeckTwo:any[]=[]
  topDecks:any= this.BoardGameService.topDecks
  
  getTopDecks(){
   this.MyDeckService.getTopDeccks()
   this.topDecks = TOPDECKS
  }
  selectingDeck(name:string,player:string){
    if(player ==="deckSelector"){
      this.BoardGameService.selectingDeck(name, player)
    }
    else{
      this.BoardGameService.selectingDeckTwo(name, player)
    }
    this.cardsOfDeck= this.BoardGameService.cardsOfDeck
    this.cardsOfDeckTwo= this.BoardGameService.cardsOfDeckTwo
  }
  letsBattle(){
    this.AppComponent.onBattle = true
  }
  opentutorial():void{
    const dialogTutorialRef = this.matDialogTutorial.open(DialogTutorialComponent)
    dialogTutorialRef.afterClosed().subscribe(res => {console.log(res)})
  }
  
  constructor(
      private AppComponent:AppComponent,
      private MyDeckService:MyDeckService, 
      private BoardGameService:BoardGameService,
      public matDialogTutorial:MatDialog,  ) { }

  ngOnInit(): void {
  }


}




