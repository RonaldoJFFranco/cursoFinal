import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../model/player';

@Component({
  selector: 'game-infos',
  templateUrl: './game-infos.component.html',
  styleUrls: ['./game-infos.component.css']
})
export class GameInfosComponent implements OnInit {

  @Input()
    turn: number;
  @Input()
    playerTurn: Player;
  @Input()
    sec: number;

  constructor() {
  }

  ngOnInit() {
  }
}
