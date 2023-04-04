import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { PageDatosPokemonComponent } from './page-datos-pokemon/page-datos-pokemon.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TarjetaComponent,
    BuscadorComponent,
    PageDatosPokemonComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageDatosPokemonComponent
  ]
})
export class DatosPokemonModule { }