import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
// inicio nome do pokemon como string
export class PokemonCardComponent {
  @Input()
  pokemon: string;
  // final nome do pokemon como string

  // inicio url personalizada com o numero do pokemon
  @Input()
  numero: number;
  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
    // final url personalizada como o numero do pokemon
  }

  // inicio função para retornar zeros
  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
  // final função para retornar zeros
}
