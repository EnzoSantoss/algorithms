//Binary Search Algorithm

//Usado em arrays ordenados ASC ou DESC
//Passo 1 = achar o elemento do meio

console.log("Binary Search Algorithm");
const arrAsc = [-18, -12, -4, 0, 2, 3, 4, 15, 16, 18, 22, 45, 89];
const arrDesc = [33, 22, 10, 9, 6, 5, 3, 1];

//findNumberBynarySearch(arrAsc, 22);

function findNumberBynarySearch(arr: number[], target: number) {
  console.log(arr);

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    console.log(start);
    console.log(end);

    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] == target) {
      console.log("Achou o elemento do meio: " + arr[mid]);
      return arr[mid];
    }
  }

  console.log("Elemento não existe");
}

//Binary search sem saber se é array ASC ou DESC

//findNumberByAgnosticBynaricSearch(arrAsc, 18);

function findNumberByAgnosticBynaricSearch(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  const isAsc = arr[0] < arr[end] ? true : false;

  if (isAsc) {
    while (start <= end) {
      const mid = Math.trunc((start + end) / 2);

      if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else if (arr[mid] == target) {
        console.log("ACHOU O NUMERO ASC " + arr[mid]);
        return;
      }
    }

    console.log("NÃO ACHOU O NUMERO ASC");
  } else {
    while (start <= end) {
      const mid = Math.trunc((start + end) / 2);

      if (arr[mid] < target) {
        start = mid - 1;
      } else if (arr[mid] > target) {
        end = mid + 1;
      } else if (arr[mid] == target) {
        console.log("ACHOU O NUMERO DESC " + arr[mid]);
        return;
      }

      console.log("NÃO ACHOU O NUMER DESC");
    }
  }
}

//Exercicios
//1 Achar o numero alvo ou o menor numero que se aproxima no numero alvo
const ex1Arr = [3, 6, 9, 10, 13, 20];

//findTheTargetOrSmallest(ex1Arr, 8);

function findTheTargetOrSmallest(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    console.log("inicio");
    console.log(`Starting at: ${start} / End at: ${end}`);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] == target) {
      console.log(`Numero alvo no array: ${arr[mid]}`);
      return;
    }
    console.log("fim");
    console.log(`Starting at: ${start} / End at: ${end}`);
  }

  console.log(`Menor numero proximo = ${arr[end]}`);
}

//2 Achar a menor letrar que é maior que o letra alvo
const ex2Arr = ["a", "c", "d", "e", "f"];
//letterFinder(ex2Arr, "e");

function letterFinder(arr: string[], target: string) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (target == arr[mid]) {
      start = mid + 1;
    }
  }

  start = start == arr.length ? 0 : start;
  //start == arr.length && start= 0;

  console.log(`maior menor letra: ${arr[start]}`);
}

//3 Achar o primeiro e o ultimo index de um numero eum array
const ex3Arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7];

findFirstLastPosition(ex3Arr, 5);

function findFirstLastPosition(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;
  let firstPosition = -1;
  let lastPosition = -1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      firstPosition = mid;
      end = mid - 1; // continua a busca na metade esquerda
    }
  }

  if (firstPosition !== -1) {
    start = 0;
    end = arr.length - 1;

    while (start <= end) {
      const mid = Math.trunc((start + end) / 2);

      if (target < arr[mid]) {
        end = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        lastPosition = mid; // continuar procurando na parte direita
        start = mid + 1;
      }
    }
  }

  console.log(
    `Item encontrado na posição inical ${firstPosition} e na posição final ${lastPosition}`
  );
}
