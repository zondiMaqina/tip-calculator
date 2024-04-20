/* 
User must enter 2 inputs => Bill and Tip ;
User must choose percentage of tip (function) ;

AFTER

user must see amount of bill for each person ;
user must see amount total amount with bill for each person after pressing tip amount ;

*/

/* TARGET NODES */
let price = 
document.getElementById("price") ;

let billAmount = 
document.getElementById("bill-input") ;

let amountOfPeople =
document.getElementById("people") ;

let tipButton = 
document.querySelectorAll(".option")

let customAmount = 
document.getElementsByClassName("option-input") ;

let person_balance = 
document.getElementsByClassName("total-balance") ;

let person_tip = 
document.getElementsByClassName("tip-balance") ;

let tip;
let bill;

tipButton.forEach((amount) => {
    amount.addEventListener("click", function(){

        percentage  = 
        amount.firstChild.textContent ;

        if (amountOfPeople.value > 0 || bill !== NaN){
            amountOfPeople.classList.remove("warning") ;
            
            total = price.value * (Number(percentage) / 100) ;
            tip = price.value - total;
            bill = ((total) * Number(amountOfPeople.value)) + (tip * Number(amountOfPeople.value))

            billAmount.value = Math.ceil(bill) ;
        }else if (amountOfPeople.value <= 0){
            amountOfPeople.classList.add("warning") ;
        }

        
    })  
}) ;

customAmount.addEventListener("keyup", (e)=>{

    if (e.keyCode == 13){

    }
})

function reset(){
    person_balance.innerText = 0.00 ;
    person_tip.innerText = 0.00 ;
}


