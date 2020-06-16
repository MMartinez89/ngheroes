import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) { 
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe( params['id'] );
    });
  }

  ngOnInit() {
  }

}
