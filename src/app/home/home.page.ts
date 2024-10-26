import { Component, inject, OnInit } from '@angular/core';
import { PelisApiServiceService } from '../servicios/pelis-api-service.service';
import { Peliculas } from '../interfaces/interfaz';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  pelisApiServ = inject(PelisApiServiceService)
  movie : Peliculas [] = [];
  constructor() {}

  ngOnInit(): void {
    const peliStore = localStorage.getItem('movie');
    if (peliStore){
      this.movie = JSON.parse(peliStore);
    } else{
      this.pelisApiServ.obtenerPeliculas().subscribe((movie)=>{
        localStorage.setItem('movie', JSON.stringify(movie))
        this.movie = movie;
      })
    }
  }

}
