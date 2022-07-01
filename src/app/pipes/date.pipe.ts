import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(
    array: any[],
    date: string,
    month: string,
    dia: string,
    mes: string
  ): any[] {
    let arr: any[];
    if (array == undefined || array == null) {
      return;
    }
    arr = array.filter((item) => {
      return item.general.fecha_consulta[dia].toFixed().includes(date);
    });
    return arr.filter((item) => {
      return item.general.fecha_consulta[mes].toFixed().includes(month);
    });
  }
}
