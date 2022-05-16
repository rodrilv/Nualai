import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], text: string, _id: string): any[] {
    if (text === '' || text === undefined) {
      return array;
    } else {
      text = text.toUpperCase();
      return array.filter((item) => {
        return item[_id].toUpperCase().includes(text);
      });
    }
  }
}
