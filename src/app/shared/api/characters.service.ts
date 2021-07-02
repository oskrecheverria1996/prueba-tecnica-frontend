import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesService } from './utilities.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url_host: any = environment.apiUrl;

  constructor(public http: HttpClient, private utility: UtilitiesService) { }

  fnHttpGetCharactersByHouse(house): Observable<any> {
    return this.http.get(this.utility.fnGetHost() + 'characters/house/' + house,
      {
        observe: 'response',
        reportProgress: true,
      });
  }

  fnHttpGetStudents(): Observable<any> {
    return this.http.get(this.utility.fnGetHost() + 'characters/students',
      {
        observe: 'response',
        reportProgress: true,
      });
  }

  fnHttpGetStaff(): Observable<any> {
    return this.http.get(this.utility.fnGetHost() + 'characters/staff',
      {
        observe: 'response',
        reportProgress: true,
      });
  }

}
