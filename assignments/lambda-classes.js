// CODE here for your Lambda Classes
class Person {

  constructor(name, age, location, gender) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.gender = gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

// Instructors object ---------------------------------------

class Instructor extends Person {

  constructor(attr) {
    super(attr.name, attr.age, attr.location, attr.gender);
    
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

// Studets Object -------------------------------------------

class Student extends Person {

  constructor(attr) {
    super(attr.name, attr.age, attr.location, attr.gender);

    this.previousBackground = attr.previosBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
    
  }

  listsSubjects() {
    this.favSubjects.forEach(el => console.log(el));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subj) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

// PM Object ---------------------------------------

class ProjectManager extends Instructor {

  constructor(name, age, location, gender, favLanguage, catchPhrase, gradClassName, favInstructor) {
    super(name, age, location, gender, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChan){
    console.log(`${this.name} announces to ${slackChan}, @channel standy times!`);
  }
  debugsCode(studentObj, subj) {
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subj}`);
  }
}

/* ------------------------------------------------
  OBJECT INSTANCE CREATION
------------------------------------------------- */

const bill = new Instructor({
  name: 'Bill Harper',
  age: 44,
  location: 'Cabin in the Woods',
  gender: 'M',
  specialty: 'Making boss food',
  favLanguage: 'French',
  catchPhrase: 'Wabbaluba Dub Dub!'
});
const connor = new Instructor({
  name: 'Connor Jones',
  age: 30,
  location: 'Miami, FL',
  gender: 'M',
  specialty: 'Python',
  favLanguage: 'Ruby',
  catchPhrase: 'That\'s all folks'
});
const michelle = new Instructor({
  name: 'Michelle York',
  age: 49,
  location: 'New Orleans, LA',
  gender: 'F',
  specialty: 'Making boss food',
  favLanguage: 'French',
  catchPhrase: 'Wabbaluba Dub Dub!'
});

// bill.demo('History');
// console.log(michelle.catchPhrase);

const shawn = new Student({
  name: 'Shawn Henry',
  age: 22,
  location: 'Middle of the Desert',
  gender: 'M',
  previousBackground: 'Wordpress Websites',
  className: 'Full Stack Web Development',
  favSubjects: [ 'CSS', 'HTML', 'JavaScript' ]
});
const adrian = new Student({
  name: 'Adrian Nairda',
  age: 35,
  location: 'San Jose, CA',
  gender: 'M',
  previousBackground: 'Waiter',
  className: 'Full Stack Web Development',
  favSubjects: [ 'PHP', 'HTML', 'Markup' ]
});

// shawn.listsSubjects();
// adrian.PRAssignment('Trigonometry');
// connor.grade(shawn, shawn.className)

const grangerD = new ProjectManager({
  name: 'Granger Downtown',
  age: 54,
  location: 'Marlboro, SC',
  gender: 'M',
  favLanguage: 'SQL',
  catchPhrase: 'Back in my day...',
  gradClassName: 'WEBPT5',
  favInstructor: 'Josh Knell'
});
const louiseV = new ProjectManager({
  name: 'Louise Vernello',
  age: 40,
  location: 'Brownington, IL',
  gender: 'F',
  favLanguage: 'React',
  catchPhrase: 'Go Lambda',
  gradClassName: 'WEBPT5',
  favInstructor: 'Josh Knell'
});

// grangerD.debugsCode(shawn, 'Judicial Powers');
// louiseV.standUp('webpt5_sprint03');