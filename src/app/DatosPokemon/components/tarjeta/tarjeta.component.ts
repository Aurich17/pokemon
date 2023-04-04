import { UpperCasePipe } from '@angular/common';
import { PokemonService } from './../../../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  lenguaje:string
  nombre:string
  groupPokemon:FormGroup
  numeroPokedex:string
  tipo:string
  descripcion:string 
  imagenUrl: string = '../../../../assets/images/Interrogacion.jpg';
  
  //imagenUrl = 'https://pokeapi.co/media/sprites/pokemon/25.png';
  constructor(private pokemonService:PokemonService) { }
  
  ngOnInit(): void {
    this.groupPokemon = new FormGroup({
      nombre: new FormControl(null,null)
    })
  }

  muestraImagen(){
    const values = this.groupPokemon.value
    this.pokemonService.getPokemonNombre(values['nombre']).subscribe(pokemon => {
      this.imagenUrl = pokemon.sprites.other['official-artwork'].front_default
      this.numeroPokedex =pokemon.id
      this.nombre = (pokemon.name).toUpperCase()
      this.muestraEspecie(values['nombre'])
    });
  }

  muestraEspecie(value:any){
    this.pokemonService.getEspecies(value).subscribe(species =>{
      const descripcionEnEspanol = species.flavor_text_entries.find(entrada => entrada.language.name === 'es');
      if (descripcionEnEspanol) {
        this.descripcion = descripcionEnEspanol.flavor_text;
      }
    })
  }

}
