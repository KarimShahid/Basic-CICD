function greet(name) {
return `Hello, ${name}!`;
}


function add(a, b) {
return a + b;
}


function greetAll(names) {
if (!Array.isArray(names)) {
throw new Error('Input must be an array of names');
}
return names.map(name => `Greetings: ${name}`);
}


module.exports = { greet, add, greetAll };