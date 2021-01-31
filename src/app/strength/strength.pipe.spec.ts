import { StrengthPipe } from './strength.pipe';

describe('StrenghtPipe', () => {
    it('should display week if strenght it 5', () => {
        //arrange
        let pipe = new StrengthPipe();

        //act and assert
        expect(pipe.transform(5)).toBe('5 (weak)');
    })

    it('should display week if strenght it 10', () => {
        //arrange
        let pipe = new StrengthPipe();

        //act and assert
        expect(pipe.transform(10)).toBe('10 (strong)');
    })
})