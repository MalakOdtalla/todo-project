var username = prompt("Enter your name!");
var gender = prompt("Enter your gender!");

var age = prompt("Enter your age!");

if (age <= 0){
    alert("Your age is wrong, try Again ")

}

/*if (gender = 'Male'){
    alert("Welcome Mr."+username);
}else if(gender = 'Female') {
    alert("Welcome Ms."+username);

}else {
    alert("Welcome"+username);

}*/



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

























