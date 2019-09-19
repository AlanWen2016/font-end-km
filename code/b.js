// b.js
console.log('在B');
exports.x = 'b1';
console.log('b.js ', require('./a.js').x);
exports.x = 'b2';
console.log('在B end');
