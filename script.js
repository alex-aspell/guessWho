$(document).ready(onReady);
let students=[];
class StudentConstructor {
  constructor (userName, actualName){
    this.userName = userName;
    this.actualName = actualName;
  }
}





function onReady(){


// console.log(Math.floor(Math.random() * (1 + max - min) + min));
      // return Math.floor(Math.random() * (1 + max - min) + min);

students.push(new StudentConstructor('mdgregoire', 'Michael'));
students.push(new StudentConstructor('crouton21', 'Christiana'));
students.push(new StudentConstructor('alex-aspell', 'Alex'));
students.push(new StudentConstructor('tenzin1993', 'Tenzin'));

console.log(students);
}
