const Car = require('./car');

test('tests if color of the car is yellow', () => {
  expect(new Car('yellow').getColor()).toEqual('yellow');
});
