import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arr: any[], texto: string, columna: string): any[] {
    console.log(arr);

    texto = texto.toLowerCase();

    if (texto === '') {
      return arr;
    } else {
      arr.filter((item) => {
        return item[columna].toLowerCase().includes(texto);
      });
    }
  }
}
