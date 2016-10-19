$(document).ready(function(){

// do {
  var choice = prompt ("Would you like to do arithematic (enter a) or do a temperature conversion (enter t)?");
  if (choice === "a") {
    $("form#addition").submit(function(event) {
      event.preventDefault();
      var mathInput = $("input#add").val();
      var answer = doMath(mathInput);
      $("#output").text(answer);
  });
  var doMath = function(input){
    var inputLength = input.length;
    var number1 = parseInt(input.charAt(0));
    for (i = 0; i < inputLength - 1; i = i+4){
      alert(i);
      alert(number1);
      var op = input.charAt(i + 2);
      var number2 = parseInt(input.charAt(i + 4));
      alert(number2);
      if (op === "+"){
        var total = function(firstNum, secondNum) {
          return firstNum + secondNum;
        };
        number1 = total(number1, number2);
        debugger;
        //alert(number1);

      };
    };
    return number1;
  };








//   if (choice === "subtract"){
//     var input = prompt("enter in 2 numbers separated by a space to subtract.");
//     var number1 = parseInt(input.charAt(0));
//     var number2 = parseInt(input.charAt(2));
//     var subtract = function(firstNum, secondNum) {
//     	return firstNum - secondNum;
//     };
//     var result = subtract(number1, number2);
//     alert(number1 + " - " + number2 + " = " + result);
//   };
//   if (choice === "multiply"){
//     var input = prompt("enter in three numbers separated by a space to multiply.");
//     var number1 = parseInt(input.charAt(0));
//     var number2 = parseInt(input.charAt(2));
//     var number3 = parseInt(input.charAt(4));
//     var multiply = function(firstNum, secondNum, thirdnum) {
//     	return firstNum * secondNum * thirdnum;
//     };
//     var result = multiply(number1, number2, number3);
//     alert(number1 + " * " + number2 + " * " + number3 + " = " + result);
//   };
//   if (choice === "divide"){
//     var input = prompt("enter in 2 numbers separated by a space to divde.");
//     var number1 = parseInt(input.charAt(0));
//     var number2 = parseInt(input.charAt(2));
//     var divide = function(firstNum, secondNum) {
//     	return firstNum / secondNum;
//     };
//     var result = divide(number1, number2);
//     alert(number1 + " / " + number2 + " = " + result);
//   };
    };
    if (choice === "t"){
      var input = prompt('Enter tempature you would like to convert. To convert from celcius to fahrenheit add a "c" before your number. To convert from fehrenheit to celcius add an "f" before your number.');
      var type = input.charAt(0);
      input = parseInt(input.substr(1));
      if (type === "c") {
      	var result = input * (9/5) + 32;
      }
      if (type === "f") {
      	var result = (input - 32) * (5/9);
      }
      alert(result);
  };
  //   var again = prompt("Would you like to go again? If so, type yes.");
  // } while(again === "yes");
});
