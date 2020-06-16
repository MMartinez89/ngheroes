import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  termino: string;
  heroes: Heroe[] = [];
  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute

  ) { 
    this.activatedRoute.params.subscribe(params => {
      debugger
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    });
  }

  ngOnInit() {
  }

}
