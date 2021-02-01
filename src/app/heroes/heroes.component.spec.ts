
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
})