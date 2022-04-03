import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcusd'
})
export class BtcusdPipe implements PipeTransform {

  transform(value:number , ...args: number[]): unknown {
    return value * 50000;
  }

}
