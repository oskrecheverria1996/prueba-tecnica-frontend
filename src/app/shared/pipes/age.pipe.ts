import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value != null && value != '' && value != false) {
      var formato_fecha = value.split("-");
      var dia_nacimiento = +new Date(+formato_fecha[2], formato_fecha[1] - 1, +formato_fecha[0]); 
      // var dia_nacimiento = +new Date(value);
      return Math.trunc(((Date.now() - dia_nacimiento) / (24 * 3600 * 365.25 * 1000)));
    } else {
      return null;
    }
  }

}
