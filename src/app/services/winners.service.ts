import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/model/player';
import { Winner } from 'src/app/model/winner';
import { tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  private readonly API = 'https://vast-spire-73802.herokuapp.com/winners';
  
  constructor(private http: HttpClient) { }

  getWinners(){
    return this.http.get<Winner[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

  addWinner(player: Player, time: number){
    
    return this.http.post(this.API,{name: player.name, time: time})
      .pipe(take(1));
  }
}

