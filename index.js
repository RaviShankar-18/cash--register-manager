let billAmount = document.querySelector(".bill-amount");
let cashGiven = document.querySelector(".cash-given");
let errorMessage = document.querySelector(".error-msg");
let checkButton = document.querySelector(".check");
let noOfNotes = document.querySelectorAll(".no-of-notes");
const notes =[2000,500,100,20,10,5,1];


checkButton.addEventListener("click",validateBillAmountAndCashGiven)

function validateBillAmountAndCashGiven(){
    if(billAmount.value >=0){
      if(cashGiven.value >= billAmount.value){
       
        let amountToBePaid = cashGiven.value - billAmount.value;
        console.log(amountToBePaid);
        amountReturn(amountToBePaid);

      }else{
        
        showMessage("Pay the amount equal to bill");
      }

    }else
    {
        if(!isNaN(billAmount.value)){
            showMessage("The input is a negative number type a valid number")
        }else{
            showMessage("The input is a String");

        }
        
    }
}





function showMessage(msg){
    errorMessage.innerText =msg;

}

function amountReturn(value){

    for(let i=0;i<notes.length;i++){
        let note = Math.trunc(value/notes[i])
        noOfNotes[i].innerText=note
        value = value % notes[i]
    }

}


