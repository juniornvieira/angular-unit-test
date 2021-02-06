
import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component'

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id:1, name:'SpiderDude', strength: 8},
      {id:1, name:'Wonderful woman', strength: 24},
      {id:1, name:'SuperrDude', strength: 55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero','deleteHero'])
    component = new HeroesComponent(mockHeroService);
  })

  describe('delete', () => {

    it('should remove the indicated hero form heroes list', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        //this mock code is necessary because deleteHero return a promise
        //this.heroService.deleteHero(hero).subscribe();

        component.heroes = HEROES;
        component.delete(HEROES[2])

        //act and assert
        expect(component.heroes.length).toBe(2); //checking of the component state has changed
    })

    it('should call deleteHero', () => {
        mockHeroService.deleteHero.and.returnValue(of(true));
        //this code is necessary because deleteHero return a promise
        //this.heroService.deleteHero(hero).subscribe();

        component.heroes = HEROES;
        component.delete(HEROES[2])

        //check if method was called 
        expect(mockHeroService.deleteHero).toHaveBeenCalled();
      //check if method was called with parameters
        expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })
  })
})