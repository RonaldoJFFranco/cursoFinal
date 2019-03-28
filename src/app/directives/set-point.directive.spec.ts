import { SetPointDirective } from './set-point.directive';
import { PlayerService } from '../services/player.service';
import { Renderer2 } from '@angular/core';

describe('SetPointDirective', () => {
  it('should create an instance', () => {
    const directive = new SetPointDirective();
    expect(directive).toBeTruthy();
  });
});
