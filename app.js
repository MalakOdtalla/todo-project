let username = prompt("Enter your name!");
let gender='';
while(gender != "male" && gender != "female"){
     gender = prompt("Enter your gender!");
}

//__________________________
let age ='' ;

while (age <= 0){

    age= prompt("Enter your age!");
 
}

//__________________________

if (confirm("Do you need to skip the welcoming message?") == true) {
  alert("bye!") ;
} else {
    switch(gender) {
        case "male" :
            alert("Welcome Mr."+username);
          break;
        case "female":
            alert("Welcome Ms."+username);
          break;
        default:
            alert("Welcome  "+username);
      }
    
}
//_____________________________

let question1= prompt("Did you do your task yesterday?");
if ((question1 )=== ""){
    prompt('invalid,please answer');
}
let question2 = prompt("did you find our tasks easy?");
if ((question2 )=== ""){
    prompt('invalid,please answer');
}
let question3 = prompt("Did you find our website useful?");
if ((question3 )=== ""){
    prompt('invalid,please answer');
}

//____________________

let arrayofAnswers=['yes','no'];
let items='';

function traverseArray(arr){

    for(let i=0; i< arr.length; i++){
       items= arr[i];
    }
    return items;
}

console.log(traverseArray(arrayofAnswers));


























