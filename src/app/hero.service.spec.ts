import {  TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController; //to mock private http: HttpClient
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add'])//mock service

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
          HeroService,
        { provide: MessageService, useValue: mockMessageService } //mock service
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController); //to mock private http: HttpClient
    service = TestBed.get(HeroService);
  });

  describe('getHero', () => {
      it('should call get with correct URL', () => {
        
        service.getHero(4).subscribe();

        const req = httpTestingController.expectOne('api/heroes/4'); //expectation
        req.flush({id: 4, name: 'SuperDude', strength: 100}) // set return as an object
        httpTestingController.verify(); //make sure going to be called once only
      });
  });
});