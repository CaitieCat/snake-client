const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');

const object = connect();
setupInput(object);
