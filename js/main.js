
// smart login system

var userEmail = prompt("please enter your Email")
var userPassword = prompt("please enter your password")
var number_of_tries = 0

while (userEmail != "wwww" || userPassword != "27") {

number_of_tries++
    if (number_of_tries < 3) {

        userEmail = prompt("please Enter correct email")
        userPass = prompt("please Enter correct password")
    }
    else {

        alert("you tried too many times ")
        break
    }
}

if (userEmail == "wwww" && userPassword == "27") {

    alert("successfully logged in ")
    var number_of_question = +prompt("please enter your number of question")
    var operators = ["+", "-", "*", "/"]
    var score = 0

    for (var i = 1; i <= number_of_question; i++) {
        var num1 = Math.floor(Math.random() * 10);
        var num2 = Math.floor(Math.random() * 10);
        var operations= operators[Math.floor(Math.random() * operators.length)];
       var userAnswer = +prompt(` ${i} )  ${num1} ${operations} ${num2} = `);
    

var correctAnswer
if (operations === "+"){
 correctAnswer=num1+num2
}
else if (operations === "-"){
 correctAnswer=num1-num2
}
else if (operations === "*"){
 correctAnswer=num1-num2
}
else if (operations === "/"){
 correctAnswer=num1/num2
}
else{
    console.log("you enter valid data");
    
}
 
 if(userAnswer===correctAnswer){
    alert("well done your answer is correct")
    score++
 }
}

    
    alert("Your score is: " + score + " out of " + number_of_question)


}