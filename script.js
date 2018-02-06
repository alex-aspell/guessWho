$(document).ready(onReady);
let students=[]; //global array to store student information
let randomNumber; //global variable to store random number
class StudentConstructor {
  constructor (userName, actualName){
    this.userName = userName;
    this.actualName = actualName;
  }
} //end student constructor

function onReady(){
  students.push(new StudentConstructor('mdgregoire', 'Michael'));
  students.push(new StudentConstructor('crouton21', 'Christiana'));
  students.push(new StudentConstructor('alex-aspell', 'Alex'));
  students.push(new StudentConstructor('tenzin1993', 'Tenzin'));
  randomNumber = Math.floor(Math.random()*students.length);//ranadom number generator
  $('#randomName').text(students[randomNumber].actualName);//puts random name on the dom



  for(i=0; i<students.length; i++){
    console.log('in for loop');
    $('#generatedImages').append(`<img src ='https://github.com/${students[i].userName}.png' class = 'studentImage' data-user=(${students[i].actualName})>`);
  }// end for loop to generate Images




}//end onready
