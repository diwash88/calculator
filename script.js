
const value1Input = document.getElementById('value1');
const value2Input = document.getElementById('value2');
const resultDisplay = document.getElementById('result');

function calculate(operator) {
  const value1 = Number(value1Input.value);
  const value2 = Number(value2Input.value);

  let result;

  switch (operator) {
    case '/':
      result = value1 / value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '%':
      result = value1 % value2;
      break;
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    default:
      result = ' ';
  }


  resultDisplay.value = result;
}
function insert_value(operator) {
  calculate(operator);
}



document.querySelector('.btn1').addEventListener('click', function() {
  calculate('/');
});

document.querySelector('.btn2').addEventListener('click', function() {
  calculate('*');
});

document.querySelector('.btn3').addEventListener('click', function() {
  calculate('%');
});

document.querySelector('.btn4').addEventListener('click', function() {
  calculate('+');
});

document.querySelector('.btn5').addEventListener('click', function() {
  calculate('-');
});

   
     
