 
 
 
 function getRandomNumber() {
    return Math.floor(Math.random() * 50);
}

function getRandomOperator() {
   const operators = ['+', '-', 'x', '/'];
     return operators[Math.floor(Math.random() * operators.length)];

}

function generateMathQuestion() {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();
    const operator1 = getRandomOperator();
    const operator2 = getRandomOperator();
    return `${num1} ${operator1} ${num2} ${operator2} ${num3}`;
     }
     
     const question = generateMathQuestion();
     document.getElementById("question1").innerHTML = question