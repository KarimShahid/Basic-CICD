const { greet } = require('../index');
const { add } = require('../index');

test('greets a person correctly', () => {
  expect(greet('Karim')).toBe('Hello, Karim!');
});

test('greets CI/CD World', () => {
  expect(greet('CI/CD World')).toBe('Hello, CI/CD World!');
});

test('adds two numbers correctly',()=>{
  expect(add(6,6)).toBe(12);
})