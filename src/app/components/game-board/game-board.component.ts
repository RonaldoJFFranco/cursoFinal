import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../model/player';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() playerBoard: Player;
  @Output() point = new EventEmitter();
  
  change(event){
    this.playerBoard = event;
    this.point.emit(this.playerBoard);
  }
}
