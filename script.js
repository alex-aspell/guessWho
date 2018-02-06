$(document).ready(onReady);
let students=[];
class StudentConstructor {
  constructor (userName, actualName){
    this.userName = userName;
    this.actualName = actualName;
  }
}
let randomNumber;
function onReady(){
students.push(new StudentConstructor('mdgregoire', 'Michael'));
students.push(new StudentConstructor('crouton21', 'Christiana'));
students.push(new StudentConstructor('alex-aspell', 'Alex'));
students.push(new StudentConstructor('tenzin1993', 'Tenzin'));
randomNumber = Math.floor(Math.random()*students.length);
// console.log(randomNumber);
// console.log(students[randomNumber]);
$('#randomName').text(students[randomNumber].actualName);



for(i=0; i<students.length; i++){
console.log('in for loop');
$('#generatedImages').append(`<img src ='https://github.com/${students[i].userName}.png' data-user=(${students[i].actualName})>`);

}



}//end onready
