class Person {
	constructor(firstName,lastName){
		this.firstName = firstName;
		this.lastName =lastName;

	}
	sayHi(){
		return `hi there! my name is ${this.firstName}!`;
	}
	sayHiToAnotherPerson(personToGreet){
		return `Hi there ${personToGreet.firstName}! I am ${
			this.firstName}!`
		}
	}


let a = new Person('Anna','Andersoon');
let b = new Person('Pelle','petersson');
console.log(a);
console.log(b);
console.log(a.sayHiToAnotherPerson(b));
console.log(b.sayHiToAnotherPerson(a));