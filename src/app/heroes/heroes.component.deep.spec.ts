import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroComponent } from '../hero/hero.component';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent (deep tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>; //call component
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 1, name: 'Wonderful woman', strength: 24 },
      { id: 1, name: 'SuperrDude', strength: 55 }
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])//mock service

    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService } //mock service
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    
  });

  it('should render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES)); //called on Onit

    fixture.detectChanges(); //run ngOnIt - which will trigger Onit - be applied to heroes component and hero componentn(child)

    // fetch all elements of <app-hero or HeroComponent. same thing
    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent)) 
    expect(heroComponentDEs.length).toBe(3);
    for (let i = 0; i < heroComponentDEs.length; i++){
      expect(heroComponentDEs[i].componentInstance.hero).toBe(HEROES[i]);
    }

  });
});