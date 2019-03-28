import { Directive, EventEmitter , ElementRef, HostListener, Renderer2, Input, Output} from '@angular/core';
import { PlayerService } from '../services/player.service'
import { Player } from '../model/player';

@Directive({
  selector: '[SetPoint]'
})

export class SetPointDirective {

  @Input()
    SetPoint: Player;
  image: string;

  @Output() point = new EventEmitter();
  constructor(private el?: ElementRef, private renderer?: Renderer2, private _player?: PlayerService) {
  }

  @HostListener('click')
  onClick() {
    if (this.el.nativeElement.getAttribute('value')) event.stopPropagation();
    else {
      this.image = (this.SetPoint.value == 1) ? '../assets/img/x.png' : '../assets/img/o.png';
      this.renderer.setStyle(this.el.nativeElement, 'background-image', `url('${this.image}')`);
      this.renderer.setStyle(this.el.nativeElement, 'background-size', "contain");
      this.renderer.setStyle(this.el.nativeElement, 'background-position', "center");
      this.renderer.setStyle(this.el.nativeElement, 'background-repeat', "no-repeat");
      this.renderer.setAttribute(this.el.nativeElement, 'value', `${this.SetPoint.value}`);
      this._player.changePlayer();
      this.point.emit({campo : this.el.nativeElement.getAttribute('name')});
    }
  }
}
