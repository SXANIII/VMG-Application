import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {

  transform(value: any[], maxSliderValue: string, propName: string): any[] {
    const resultArray = [];

    if(value.length === 0 || propName === ''){
      return value;
    }

     for (const item of value) {
       if(Number(item.selling_price) <= Number(maxSliderValue)){
         resultArray.push(item);
       }
       else if (Number(maxSliderValue) < 129500){
        return value;
       }
     }

    return resultArray;
  }
}
