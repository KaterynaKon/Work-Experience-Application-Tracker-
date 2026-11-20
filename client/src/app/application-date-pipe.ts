import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationDate',
})
export class ApplicationDatePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '-';
    }

    const date = new Date(value);
    if(Number.isNaN(date.getTime())) {
      return '-';
    }
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }
}
