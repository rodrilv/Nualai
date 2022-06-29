import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(array: any[], date: string, data: string): any[]{
    if(array == undefined || array == null){
      return;
    }
    return array.filter( (item) =>{
      return item.general.fecha_consulta[data].toFixed().includes(date);
    });
  }

}
