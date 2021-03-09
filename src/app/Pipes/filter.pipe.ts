import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  // Pipe for the Year Filter
  transform(value: any[], maxSliderValue: string, propName: string): any[] {
    const resultArray = [];

    if(value.length === 0 || propName === ''){
      return value;
    }

     for (const item of value) {
       if(Number(item.year) <= Number(maxSliderValue)){
         resultArray.push(item);
       }
       else if (Number(maxSliderValue) < 2006){
        return value;
       }
     }

    return resultArray;
  }
}
