import { Component, OnInit } from '@angular/core';
import { Hero } from 'C:/Users/ASOFTWARE/Desktop/AngularProy/Angular/Heroes/src/app/heroes/hero'
import { HeroService } from 'C:/Users/ASOFTWARE/Desktop/AngularProy/Angular/Heroes/src/app/hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
