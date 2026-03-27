import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(valor: string, limite: number = 30): string {
    if (!valor) return '';
    if (valor.length <= limite) {
      return valor;
    }
    return valor.slice(0, limite) + '...';
  }
}
