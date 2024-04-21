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
document.getElementById("option-input") ;

let person_balance = 
document.getElementById("total-balance") ;

let person_tip = 
document.getElementById("tip-balance") ;

let tip;
let bill;

tipButton.forEach((amount) => {
    amount.addEventListener("click", function(){

        percentage  = 
        amount.firstChild.textContent ;

        if (amountOfPeople.value > 0 && bill !== NaN && price.value > 0){
            amountOfPeople.classList.remove("warning") ;
            price.classList.remove("warning") ;
            total = Number(price.value) * (Number(percentage) / 100) ;
            tip = Number(price.value) * (percentage / 100) ;
            bill = Number(price.value) * Number(amountOfPeople.value)

            billAmount.value = Math.ceil(bill) ;
            person_balance.textContent = Math.round(tip + Number(price.value)) ;
            person_tip.textContent = Math.round(total) ;

        }else{
            amountOfPeople.classList.add("warning") ;
            price.classList.add("warning") ;
            billAmount.value = "?" ;
        }

        
    })  
}) ;



customAmount.addEventListener("keydown", (key) =>{
    if (key.keyCode === 13){
        amountOfPeople.classList.remove("warning") ;
        price.classList.remove("warning") ;
        total = Number(price.value) * (Number(customAmount.value) / 100) ;
        tip = Number(price.value) * (Number(customAmount.value) / 100) ;
        bill = Number(price.value) * Number(amountOfPeople.value)

        billAmount.value = Math.ceil(bill) ;
        person_balance.textContent = Math.round(tip + Number(price.value)) ;
        person_tip.textContent = Math.round(total) ;
    }
})

function reset(){
    person_balance.textContent = 0.00 ;
    person_tip.textContent = 0.00 ;
}


