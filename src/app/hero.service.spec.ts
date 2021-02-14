import {  TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroesComponent (deep tests)', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController; //to mock private http: HttpClient

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add'])//mock service

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: MessageService, useValue: mockMessageService } //mock service
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController); //to mock private http: HttpClient

  });
});