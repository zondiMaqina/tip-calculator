/* 
User must enter 2 inputs => Bill and Tip ;
User must choose percentage of tip (function) ;

AFTER

user must see amount of bill for each person ;
user must see amount total amount with bill for each person after pressing tip amount ;

*/

/* TARGET NODES */

let billAmount = 
document.getElementById("bill-input") ;

let amountOfPeople =
document.getElementById("people") ;

let tipButton = 
document.querySelectorAll(".option")

let customAmount = 
document.getElementsByClassName("option-input") ;

let section =
document.getElementsByClassName("last") ;

let total;
let tip;

tipButton.forEach((amount) => {
    amount.addEventListener("click", function(){

        percentage  = 
        amount.firstChild.textContent ;

        console.log(amountOfPeople.value);

        if (amountOfPeople.value <= 0){
            amountOfPeople.classList.add("warning") ;

            let warn =
            document.createElement("span") ;
            warn.textContent = "Cannot be less than 0"
            section.insertBefore(warn)

        }else{
            amountOfPeople.classList.toggle("warning")
        }
    })  
}) ;


function reset(){
}


