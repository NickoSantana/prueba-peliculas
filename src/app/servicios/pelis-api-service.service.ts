import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Peliculas } from '../interfaces/interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PelisApiServiceService {
  httpClient = inject(HttpClient);
  private readonly apiUrl = 'https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php?limit=100'
  constructor() { }

  obtenerPeliculas(): Observable<Peliculas[]>{
    return this.httpClient.get<Peliculas[]>(this.apiUrl);
  }

}

