import { Component, OnInit, Input } from '@angular/core';
/* Configurando o componente filho
Para usar o decorador em uma classe de componente filho,
primeiro importe e, em seguida, decore a propriedade com ,
como no exemplo a seguir.@Input()Input@Input()  */

import { Hero } from '../hero' /* Importando a interface Hero do componente hero.ts */
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;
/*O decorador em um componente filho ou diretiva
significa que a propriedade pode receber seu valor
de seu componente pai.@Input()  */


  constructor(
    private route: ActivatedRoute,
    private HeroService: HeroService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.HeroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();

  }

}
