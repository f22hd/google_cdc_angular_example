import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 30) {
      return value.substring(0, 30) + '...';
    }
    return value;
  }

}
