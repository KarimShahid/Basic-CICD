const { greetAll } = require('../index');

test('greets multiple people correctly', () => {
  const names = ['Alice', 'Bob', 'Charlie'];
  const greetings = greetAll(names);
  expect(greetings).toEqual([
    'Hello, Alice!',
    'Hello, Bob!',
    'Hello, Charlie!'
  ]);
});

test('throws error if input is not an array', () => {
  expect(() => greetAll('Alice')).toThrow('Input must be an array of names');
});
