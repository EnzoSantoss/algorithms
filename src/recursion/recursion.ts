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

console.log(sum(1234));
