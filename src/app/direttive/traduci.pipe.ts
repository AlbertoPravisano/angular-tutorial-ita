import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traduci',
  standalone: true,
})
export class TraduciPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return `⭐️ ${value} ⭐️`;
  }
}
