const { greetAll } = require('../functions');

test('greets multiple people correctly', () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const greetings = greetAll(names);
  expect(greetings).toEqual([
    'Greetings: Alice',
    'Greetings: Bob',
    'Greetings: Charlie'
  ]);
});

test('throws error if input is not an array', () => {
  expect(() => greetAll('Alice')).toThrow('Input must be an array of names');
});
