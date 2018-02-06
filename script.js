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
  students.push(new StudentConstructor('Arkmer', 'Ryan'));
  students.push(new StudentConstructor('Zygy93', 'James'));
  students.push(new StudentConstructor('TaylorNine', 'Taylor'));
  students.push(new StudentConstructor('heimlouis', 'Louis'));
  students.push(new StudentConstructor('samstanding', 'Sam'));
  students.push(new StudentConstructor('loganolzenak', 'Logan'));
  students.push(new StudentConstructor('selenacarlson', 'Selena'));
  students.push(new StudentConstructor('lizzwong', 'Elizabeth'));
  students.push(new StudentConstructor('Jaco26', 'Jacob'));
  students.push(new StudentConstructor('CarterSchleif', 'Carter'));
  students.push(new StudentConstructor('Feora1343', 'Renee'));
  students.push(new StudentConstructor('winslownick', 'Nick'));
  students.push(new StudentConstructor('dshugarts', 'Daniel'));
  students.push(new StudentConstructor('devjanaprime', 'Dev'));
  students.push(new StudentConstructor('mbMosman', 'Mary'));
  students.push(new StudentConstructor('Lysautumn', 'Ally'));
  randomNumber = Math.floor(Math.random()*students.length);//ranadom number generator
  $('#randomName').text(students[randomNumber].actualName);//puts random name on the dom

  for(i=0; i<students.length; i++){
    $('#generatedImages').append(`<img src ='https://github.com/${students[i].userName}.png' class = 'studentImage' data-user=${students[i].actualName}>`);
  }// end for loop to generate Images

$('#generatedImages').on('click', '.studentImage', clickOfStudentImage);


}//end onready


function clickOfStudentImage(){
$('#feedback').empty();

  if($(this).data('user') == students[randomNumber].actualName){
    // $('#feedback').append('Yay!');
    $(this).animate({height: "+=800", width: "+=800"});
    $(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $(this).css("border-style", "solid");
    $(this).css("border-width", "10px");
    $(this).css("border-color", "lime");

    setTimeout(restartGame, 2000);

  }//end if
  else{
    $('#feedback').append('Try Again!');
    $(this).css("border-style", "solid");
    $(this).css("border-width", "2px");
    $(this).css("border-color", "red");
    $(this).css("margin", "8px");
    // $(this).addClass("wrong");
  }//end else
}

function restartGame(){
var choice = confirm("Success! Would you like to play again?");
if (choice == true){
  location.reload();
}
}
