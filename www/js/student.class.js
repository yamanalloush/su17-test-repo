class Student extends Person {

  constructor(firstName, lastName, pNo){
    // Mandatory: In a class with a parent class
    // - if we have our own constructor
    // we must call super (the constructor of the parent class)
    super(firstName,lastName,pNo);
    // An extra property that only students have
    this.courses = [];
  }

  beginCourse(course){
    this.courses.push(course);
  }

}