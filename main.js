const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputEl = document.querySelector("#output");


function calculateProfitOrLoss(initial,quantiy,current){

if(initial>current){
    var loss=(initial-current)*quantiy;
    var lossPercentage = (loss/initial)*100;

    showOutput(` Hey, the loss is ${loss} and the percent is ${lossPercentage}%`);

}else if(current>initial){

    var profit = (current-initial)*quantiy;
    var profitPercentage = (profit/initial)*100;

    showOutput(`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`);

}else {
    showOutput("No pain no gain and no gain no pain");
  }
   
}


function submitHandler(){

    var ip = Number(initialPrice.value);
    var qty = Number(quantityOfStocks.value);
    var curr = Number(currentPrice.value);
  
    calculateProfitOrLoss(ip, qty, curr);

}

checkButton.addEventListener("click" , submitHandler);

function showOutput(message){
    outputEl.innerHTML = message;
}