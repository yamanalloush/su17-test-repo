class Teacher extends Person {

  constructor(firstName, lastName, pNo){
    super(firstName, lastName, pNo);
    this.teachingCourses = [];
  }

  startTeachingCourse(course){
    this.teachingCourses.push(course);
  }

}