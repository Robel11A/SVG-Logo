const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle renders correctly', () => {
        const shape = new Circle('green');
        expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
    });

    test('Triangle renders correctly', () => {
        const shape = new Triangle('blue');
        expect(shape.render()).toBe('<polygon points="150,15 275,185 25,185" fill="blue" />');
    });

    test('Square renders correctly', () => {
        const shape = new Square('red');
        expect(shape.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="red" />');
    });
});