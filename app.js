// for loop -> dawtalt -> neg codiig olon dahin ashiglah
// for(hedees_ehleh; hed_hurtel, nemegdeh/hasagdah){}
var random = Math.floor(Math.random()*10)+1;
for(var i=1; i<=3; i++){
    var num=+prompt("Guess the number between the numbers 1 and 10");
    if(num==random){
        alert("Congratulation, you're correct, in "+i+" tries!");
        break;
    }else if(num>10 || num<0){
        alert("Give the number between 1 and 10.");
    }else{
        alert("Wrong number, try again! "+i+" try has ended.")
    }
    if(i==3){
        alert("Your life ended! Retry again!");
    }
}