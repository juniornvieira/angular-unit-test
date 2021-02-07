import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

describe('HeroComponent (Shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    //lib to configure the test
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA] //this attribute says to angular ignore unkonw element in your HTML template
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct heroes ', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };

    expect(fixture.componentInstance.hero.name).toEqual ('SuperDude');
  });

  it('should render the hero name in anchor tag ', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    fixture.detectChanges();//reponsible for detected binding changes. Ex.: {{hero.name}}

    let deA = fixture.debugElement.query(By.css('a'));  //debugElement
    expect(deA.nativeElement.textContent).toContain('SuperDude');
    
    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude'); // nativeElement
  });

});