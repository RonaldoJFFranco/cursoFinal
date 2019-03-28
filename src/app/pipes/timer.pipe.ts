import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (minutes>0) ? minutes + ' min ' + (value - minutes * 60) + ' seg' : value + ' seg';
 }
}
