Ryan Victor Vieira Quintiliano Martins - RA:12319683
# Lista 01 - UDWMJ (`lista-01-udwmj`)

Este repositório contém o código desenvolvido para o exercício da Lista 01 da disciplina/módulo UDWMJ.

## 📄 Descrição do Código

O script desenvolvido em **JavaScript** (`index.js`) é responsável por **calcular a média aritmética** de uma lista de números (notas ou valores numéricos gerais).

### ⚙️ Como Funciona a Implementação:

1. **Validação:** A função `calcularMedia` verifica primeiramente se a entrada recebida é um array válido e se contém elementos. Caso contrário, retorna `0` para evitar erros de divisão por zero.
2. **Soma dos Elementos:** Utiliza a função de alta ordem `.reduce()` para somar todos os valores contidos no array.
3. **Cálculo da Média:** Divide o total acumulado da soma pelo número total de elementos (`numeros.length`).
4. **Exibição dos Resultados:** Um exemplo com um array de notas (`[8.5, 7.0, 9.0, 6.5]`) executa a função e exibe o resultado formatado no console utilizando `console.log`.

## 🚀 Como Executar

Para rodar o código localmente usando o Node.js:
