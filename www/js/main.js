// Create two persons
let a = new Person('Anna', 'Andersson', '820304-0720');
let b = new Person('Bertil', 'Bengtsson', '930101-4190');

// Have a look a them in the console
console.log(a);
console.log(b);
console.log(a.sayHi());
console.log(b.sayHi());

// Let a say hi to b and vice versa
console.log(a.sayHiTo(b));
console.log(b.sayHiTo(a));