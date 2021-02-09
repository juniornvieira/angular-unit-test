import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent (Shallow tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>; //call component
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id:1, name:'SpiderDude', strength: 8},
      {id:1, name:'Wonderful woman', strength: 24},
      {id:1, name:'SuperrDude', strength: 55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero','deleteHero'])//mock service
    
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        {provide: HeroService, useValue: mockHeroService} //mock service
      ],
      schemas: [NO_ERRORS_SCHEMA] 
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from service ', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES)); //mock service
    fixture.detectChanges(); //call component

    expect(fixture.componentInstance.heroes.length).toBe(3); //call component
  });

 

});