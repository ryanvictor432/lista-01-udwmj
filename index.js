/**
 * Função para calcular a média de uma lista de números
 * @param {number[]} numeros - Array contendo os números a serem calculados
 * @returns {number} A média dos números presentes na lista
 */
function calcularMedia(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return 0;
  }

  const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  return soma / numeros.length;
}

// Exemplo de uso da função
const notasAluno = [8.5, 7.0, 9.0, 6.5];
const mediaFinal = calcularMedia(notasAluno);

console.log(`Notas do aluno: ${notasAluno.join(', ')}`);
console.log(`Média final: ${mediaFinal.toFixed(2)}`);
