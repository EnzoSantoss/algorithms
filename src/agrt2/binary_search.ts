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

findTheTargetOrSmallest(ex1Arr, 6);

function findTheTargetOrSmallest(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.trunc((start + end) / 2);

    console.log(`Starting at: ${start} / End at: ${end}`);
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] == target) {
      console.log(`Numero alvo no array: ${arr[mid]}`);
      return;
    }
  }

  console.log(`Menor numero proximo = ${arr[end]}`);
}
