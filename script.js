
//display

function displayNum(num){
    console.log(num);
    result.value+=num
}



//clear text box

function clearBox(){
    result.value="";
}


//evaluate expression

function evaluateExpression(){
    expression=result.value;
    output=eval(expression)
    result.value=output; 

}



//remove the last item

function removeLastItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1);
}


