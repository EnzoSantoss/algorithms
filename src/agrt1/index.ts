const result = longestSubstringWithoutRepeatingCharacters("abcab");

type objtHash = {
  [key: string]: number;
};

function longestSubstringWithoutRepeatingCharacters(s: string) {
  let maxLength = 0; // para armazenar o comprimento máximo da substring sem repetição
  let charMap = {}; // para mapear caracteres e seus índices na string
  let start = 0; // início da janela

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    // Se o caractere já estiver no mapa e seu índice estiver dentro da janela atual,
    // movemos o início da janela para o próximo índice do caractere repetido.
    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }

    // Atualizamos o índice do caractere no mapa para o índice atual.
    charMap[currentChar] = end;

    // Calculamos o comprimento da janela atual e atualizamos maxLength conforme necessário.
    maxLength = Math.max(maxLength, end - start + 1);

    // Mostrar o estado atual
    console.log(
      `Current substring: ${s.substring(
        start,
        end + 1
      )}, Max Length: ${maxLength}`
    );
  }

  return maxLength;
}

// function slidignWindown(s: string) {
//   let maxLen = 0;
//   let charIndicesMap = {};
//   let windowBegging = 0;
//   for (let currCharIndex = 0; currCharIndex < s.length; currCharIndex++) {
//     if (charIndicesMap[s[charIndicesMap]] !== undefined) {
//       windowBegging = charIndicesMap[s[currCharIndex]] + 1;
//     }

//     charIndicesMap[s[currCharIndex]] = currCharIndex;
//     maxLen = Math.max(maxLen, currCharIndex - windowBegging + 1);
//   }

//   console.log(maxLen);
// }
