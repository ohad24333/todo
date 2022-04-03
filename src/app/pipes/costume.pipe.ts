import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'costume'
})
export class CostumePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {


    return value/3.4;
  }

}
