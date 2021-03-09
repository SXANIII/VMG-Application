import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMileage'
})
export class FilterMileagePipe implements PipeTransform {

  transform(value: any[], maxSliderValue: string, propName: string): any[] {
    const resultArray = [];

    if(value.length === 0 || propName === ''){
      return value;
    }

     for (const item of value) {
       if(Number(item.mileage) <= Number(maxSliderValue)){
         resultArray.push(item);
       }
       else if (Number(maxSliderValue) < 5600){
        return value;
       }
     }
    return resultArray;
  }

}
