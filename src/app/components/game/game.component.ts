import { Component, OnInit, TemplateRef,ViewChild}  from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../model/player';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WinnersService } from 'src/app/services/winners.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {

  public modalRef: BsModalRef;

  winners: WinnersService;
  player: PlayerService;
  inscricao: Subscription;
  
  playerTurn: Player;
  j1: Player;
  j2: Player;

  a1:number;
  a2:number;
  a3:number;
  b1:number;
  b2:number;
  b3:number;
  c1:number;
  c2:number;
  c3:number;

  sec:number = 0;
  turn: number = 1;
  finish: boolean = false;
  finalMessage;
  interval;

  @ViewChild('template') myModal: TemplateRef<any>;

  constructor(
    private route: ActivatedRoute, 
    private _player: PlayerService, 
    private modalService: BsModalService,
    private _winner: WinnersService
  ){
    this.winners = _winner;
    this.player = _player;
    this.inscricao = this.route.queryParams.subscribe(
      (params: any) => {
        this.j1 = { name: params['player1'], value: 1 };
        this.j2 = { name: params['player2'], value: 2 };
        this.player.setPlayer1(this.j1);
        this.player.setPlayer2(this.j2);
        this.player.setPlayerTurn(this.j1);
      }
    );
  }

  ngOnInit() {
    this.selectPlayer();
    this.startTimer();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  attPlayer(event) {
    this.setBoard(event);
    if (this.turn > 4) this.finish = this.checkBoard();
    if (this.finish){
      this.finalMessage = `${this.playerTurn.name} Venceu !!`;
      clearInterval(this.interval);
      const request = this.winners.addWinner(this.playerTurn, this.sec).subscribe();
      setTimeout(() => request.unsubscribe(), 2000);
      this.openModal(this.myModal);
    }
    else if(this.turn == 9){
      this.finalMessage = 'Deu Velha !!';
      clearInterval(this.interval); 
      this.openModal(this.myModal);
      this.playerTurn = new Player;
    }
    else{
      this.turn++;
      this.playerTurn = this.player.getPlayer();
    }
  }

  selectPlayer() {
    setTimeout(() => {
      this.playerTurn = this.player.getPlayer();
    }, 200);
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.sec++;
    }, 1000);
  }

  checkBoard() {
    if((this.a1 == this.a2 && this.a2 == this.a3) && this.a1!=null||
       (this.b1 == this.b2 && this.b2 == this.b3) && this.b1!=null||
       (this.c1 == this.c2 && this.c2 == this.c3) && this.c1!=null||
       (this.a1 == this.b2 && this.b2 == this.c3) && this.a1!=null||
       (this.a3 == this.b2 && this.b2 == this.c1) && this.a3!=null||
       (this.a1 == this.b1 && this.b1 == this.c1) && this.a1!=null||
       (this.a2 == this.b2 && this.b2 == this.c2) && this.a2!=null||
       (this.a3 == this.b3 && this.b3 == this.c3) && this.a3!=null){
       return true;
    }
  }
  
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{backdrop: 'static', keyboard: false});
  }

  public reload(){
    window.location.reload();
  }

  setBoard(area) {
    switch (area.campo) {
      case 'a1':
        this.a1 = this.playerTurn.value;
        break;
      case 'a2':
        this.a2 = this.playerTurn.value;
        break;
      case 'a3':
        this.a3 = this.playerTurn.value;
        break;
      case 'b1':
        this.b1 = this.playerTurn.value;
        break;
      case 'b2':
        this.b2 = this.playerTurn.value;
        break;
      case 'b3':
        this.b3 = this.playerTurn.value;
        break;
      case 'c1':
        this.c1 = this.playerTurn.value;
        break;
      case 'c2':
        this.c2 = this.playerTurn.value;
        break;
      case 'c3':
        this.c3 = this.playerTurn.value;
        break;
    }
  }
}
