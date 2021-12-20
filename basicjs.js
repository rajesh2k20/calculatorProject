
var operand1=0;
var operator=null;
var operand2=0;
var button= document.getElementsByClassName("button");
var display=document.getElementById("display");
display.innerHTML="";

function evaluate(operand1, operator, operand2){


   if(operator=='+'){
      return operand1+operand2;
   }else if(operator=='-'){
    return operand1-operand2;
   }
   else if(operator=='*'){
     return   operand1*operand2;
  }
  else{
    return operand1/operand2;
  }
 

}

for(var i=0; i<button.length;i++){
    
    button[i].addEventListener("click", fun);
}
function fun(){

  var value= this.getAttribute("data-id");
  console.log(value);

  if(value=="+"){
    console.log(value);
    operand1=parseFloat(display.innerHTML);
    display.innerHTML="";
    operator="+";

  }else if(value=="-"){
    operand1=parseFloat(display.innerHTML);
    display.innerHTML="";
    operator="-";
  }
  else if(value=="*"){
    operand1=parseFloat(display.innerHTML);
    display.innerHTML="";
    operator="*";
  }
  else if(value=="/"){
    operand1=parseFloat(display.innerHTML);
    display.innerHTML="";
    operator="/";
  }
  else if(value=="="){
    operand2=parseFloat(display.innerHTML);
    var result= evaluate(operand1, operator,operand2);
    display.innerHTML=result;
    operand1=result;
    console.log(result);
     
  }else if(value=="A/c"){
 operand1=0;
 operand2=0;
 display.innerHTML="";

  }else{
    console.log(display);
     display.innerHTML+=value;
     console.log(display.innerHTML);
  }
  
}



