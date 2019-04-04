// CODE here for your Lambda Classes
class Person {

  constructor() {
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

class Instructors extends Person {

  constructor(name, age, location, gender, favLanguage, catchPhrase) {
    super(name, age, location, gender);
    
    this.specialty = specialty;
    this.favLanguage = favLanguage;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(studObj, studStr) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}

// Studets Object -------------------------------------------

class Students extends Person {

  constructor(name, age, location, gender) {
    super(name, age, location, gender);

    this.previousBackground = prevBg;
    this.className = className;
    this.favSubjects = favSubjects;
    
  }

  listsSubjects() {
    favSubjects.forEach(el => console.log(el));
  }
  PRAssignment(subj) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subj) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

// PM Object ---------------------------------------

class ProjectManagers extends Instructors {

  constructor(name, age, location, gender, favLanguage, catchPhrase) {
    super(name, age, location, gender, favLanguage, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChan, logs){
    console.log(`${this.name} announces to ${slackChan}, @channel standy times!`);
  }
  debugsCode(studentObj, subj) {
    console.log(`${this.name} debugs ${studentObj}'s code on ${subj}`);
  }
}