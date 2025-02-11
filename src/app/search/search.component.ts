import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-search',
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ChipModule,
    TabsModule,
    AvatarModule,
    BadgeModule,
    OverlayBadgeModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchCompany: string = ''; // Para el nombre de la empresa
  searchRUC: string = ''; // Para búsqueda por RUC
  //selectedCities: string[] = []; // Ciudades seleccionadas
  //selectedNeighborhoods: string[] = []; // Barrios seleccionados
  //cities: string[] = ['Ciudad 1', 'Ciudad 2', 'Ciudad 3'];
  //neighborhoods: string[] = ['Barrio A', 'Barrio B', 'Barrio C'];

  search() {
    console.log('Buscar por:');
  }
}
