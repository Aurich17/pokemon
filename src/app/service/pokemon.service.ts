import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonNombre(idONombre: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${idONombre}`)
      .pipe(map((res: any) => res));
  }

  getEspecies(idONombre:string){
    return this.http.get(`${this.baseUrl}/pokemon-species/${idONombre}`)
    .pipe(map((res:any)=>res))
  }
}