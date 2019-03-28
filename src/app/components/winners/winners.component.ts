import { Component, OnInit } from '@angular/core';
import { WinnersService } from 'src/app/services/winners.service'
import { Winner } from 'src/app/model/winner';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {

  winners: Winner[];

  constructor(private _winners: WinnersService) {
    const request = this._winners.getWinners()
      .subscribe(dados =>
        this.winners = dados.sort((n1, n2) => {
          if (n1.time > n2.time) return 1;
          else if (n1.time < n2.time) return -1;
          return 0;
        })
      );
    setTimeout(() => request.unsubscribe(), 2000);
  }
  ngOnInit() { }
}
