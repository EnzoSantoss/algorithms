//COMO DESCOBRI SE DA PARA USAR RECURSION
//1 - quebrar o problema em problemas menores

//recurrence relation é a formula que é aplicada nas recursions

function recursionTeste(n: number) {
  if (n == 5) {
    console.log(n);
    return n;
  }

  console.log("calling recursion fucntion " + n);
  recursionTeste(n + 1);
}

//recursionTeste(0);

//Question 1
//Fibonnaci Numbers
function fibonnaci(n: number) {
  //Base condition
  if (n < 2) {
    return n;
  }

  return fibonnaci(n - 1) + fibonnaci(n - 2);
}

//console.log(fibonnaci(4));

//Question 2
//Fatorial
function factorial(n: number) {
  if (n == 1) {
    return n;
  }

  return factorial(n - 1) * n;
}

//console.log(factorial(5));

//Question 3
//Sum of digits

function sum(n: number) {
  if (n % 10 == n) {
    return n;
  }

  const digit = n % 10;
  const rest = Math.floor(n / 10);

  return digit + sum(rest);
}

//console.log(sum(1234));

//Question 4
//Reverse a number

function reverse(n: number) {
  if (n % 10 == n) {
    return n;
  }

  const lastNumber = n % 10;
  const rest = Math.floor(n / 10);

  return lastNumber + "" + reverse(rest);
}

//console.log(reverse(123));

//Question 5
//Return number of 0

function zeroCounter(n: number, qtd: number) {
  if (n % 10 == n) {
    n == 0 && qtd++;

    return qtd;
  }

  const lastNumber = n % 10;

  const rest = Math.floor(n / 10);

  lastNumber == 0 && qtd++;

  return zeroCounter(rest, qtd);
}

//console.log(zeroCounter(101, 0));

//Question 6
//Number of steps to reduce number to zero
function reduc(number: number, qtdSteps: number) {
  if (number == 0) {
    return qtdSteps;
  }

  const value = number % 2 == 0 ? number / 2 : number - 1;

  qtdSteps++;

  return reduc(value, qtdSteps);
}

//console.log(reduc(8, 0));
