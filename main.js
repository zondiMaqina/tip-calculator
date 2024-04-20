/* 
User must enter 2 inputs => Bill and Tip ;
User must choose percentage of tip (function) ;

AFTER

user must see amount of bill for each person ;
user must see amount total amount with bill for each person after pressing tip amount ;

*/

/* TARGET NODES */

let billAmount = 
document.getElementsByClassName("bill-input") ;

let amountOfPeople =
document.getElementsByClassName("people") ;

let tipButton = 
document.querySelectorAll(".option")

let resetButton = 
document.getElementsByClassName("button") ;

let customAmount = 
document.getElementsByClassName("option-input") ;


tipButton.forEach((amount) => {
    amount.addEventListener("click", function(){
        console.log(amount.firstChild.textContent);
    })
})



