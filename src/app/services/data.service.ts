import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from "rxjs/operators";
import { IComponenteMenu } from '../interfaces/IComponenteMenu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getOptionsMenu(): Observable<IComponenteMenu[]> {
    return this._http.get<IComponenteMenu[]>('/assets/data/menu.json');
  }

  getSuperHeroes(): Observable<IComponenteMenu[]> {
    return this._http.get<any[]>('/assets/data/superheroes.json').pipe(
      delay(1500)
    );
  }

  getAlbums() {
    return this._http.get('https://jsonplaceholder.typicode.com/albums');
  }
}

