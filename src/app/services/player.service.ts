import { Injectable } from '@angular/core';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  player: Player = {
    name:'',
    value: 1
  };

  j1: Player = {
    name:'',
    value: 1
  };

  j2: Player= {
    name:'',
    value: 2
  };

  constructor() {}

  getPlayer(){
    return this.player;
  }
  
  setPlayerTurn(p: Player){
    this.player = p;
  }

  setPlayer1(setj1 : Player) {
    this.j1 = setj1;
  }

  setPlayer2(setj2 : Player){
    this.j2 = setj2;
  }

  changePlayer(){
    this.player = (this.player ==  this.j1) ? this.j2 : this.j1;
  }
  
}
