class Person {

  constructor(firstName,lastName,pNo){
    // Transfer arguments ('inparametrar') to properties.
    // - this means the object currently being created
    this.firstName = firstName;
    this.lastName = lastName;
    this.pNo = pNo;
  }

  sayHi(){
    // And in methods this means the current object
    return `Hi! I am ${this.firstName} ${this.lastName}!`;
  }
   sayHiTo(anotherPerson){
    return `Hi there ${anotherPerson.firstName}! I am {this.firstName}!`
  }

}