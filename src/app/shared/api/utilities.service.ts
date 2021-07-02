import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  /**
   * Funcion para obtener ruta de la api
   * @param {string} tag
   */
  fnGetHost() {
    return environment.apiUrl;
  }

  /**
   * Funcion que reordena una coleccion segun el campo
   * @param {string} data_collection
   * @param {string} field
   * @param {string} orientation
   * @param {callback} callback
   */
  sortByField(data_collection, field, orientation, callback) {
    let collection_final = []
    if (orientation === 'original') {
      collection_final = data_collection.sort(function(a, b) {return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); } );
      callback({'collection_final': collection_final,'orientation': 'asc', });
    } else if (orientation === 'asc'){
      collection_final = data_collection.sort(function(a, b) {return (b[field] > a[field]) ? 1 : ((a[field] > b[field]) ? -1 : 0); } );
      callback({ 'collection_final': collection_final, 'orientation': 'desc', });
    } else if (orientation === 'desc') {
      callback({ 'collection_final': null, 'orientation': 'original',});
    }
  }

  /**
   * Funcion que filtra una coleccion segun un valor
   * @param {array} data_collection
   * @param {string} string_search
   * @param {callback} observer
   * @param {string} field optional
   */  
  fnFilter(data_collection, string_search, observer, field?) {
    let results = [];
    data_collection.forEach( (value, key) => {
      let flag = [];
      flag[key] = false;
      Object.keys(value).forEach(function (valprop, keypro) {
        if (typeof value[valprop] === 'string' || value[valprop] instanceof String) {
          if (field && field === valprop) {
            if (value[valprop].toLowerCase().indexOf(string_search) > -1) {
              results.push(value);
            }
          } else {
            if (value[valprop].toLowerCase().indexOf(string_search) > -1 && !flag[key]) {
              results.push(value);
              flag[key] = true;
            }
          }
        }
        return;
      });
    });
    observer(results);
  }

}
