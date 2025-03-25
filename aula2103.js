// Aula que fala sobre matrizes o seu uso e execução 
/// Formação de matriz
// Exemplos da aplicação 

/// Exemplo1
let matriz1 = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
]
// Matriz 3x3 formado por linhas e colunas
/// Exemplo2
let matriz2 = [
  [1, 2, 3],
  [3, 6, 9],
  [10, 15, 20]
];

console.log(matriz2[1][2]);
// Execução de resultado de um elemento 
for (let i = 0; i < matriz2.length; i++) {
  for (let j = 0; j < matriz2[i].length; j++) {
    console.log(`Elemento na linha ${i}, coluna ${j}: ${matriz2[i][j]}`);
  }
}
// Função para verificar se uma matriz 3x3 é um quadrado mágico (matriz onde a soma dos números em cada linha, coluna e diagonal é a mesma)
function isQuadradoMagico(matriz) {
  // Soma da primeira linha para referência
  let somaReferencia = matriz[0][0] + matriz[0][1] + matriz[0][2];
  // Verificar soma das linhas
  for (let i = 0; i < 3; i++) {
    let somaLinha = matriz[i][0] + matriz[i][1] + matriz[i][2];
    if (somaLinha !== somaReferencia) return false;
  }
  // Verficar as somas das colunas 
  for (let j = 0; j < 3; j++) {
    let somaColuna = matriz[0][j] + matriz[1][j] + matriz[2][j];
    if (somaColuna !== somaReferencia) return false;
  }
  // Verificando as diagonais
  let somaDiagonal1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
  let somaDiagonal2 = matriz[0][2] + matriz[1][1] + matriz[2][0];
  if (somaDiagonal1 !== somaReferencia || somaDiagonal2 !== somaReferencia) return false;

  return true;
}
// Testando a função
let quadradoMagico = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];
console.log(isQuadradoMagico(quadradoMagico)); // saída deve ser true para um quadrado mágico.
// Batalha Naval - tabuleiro 5x5
// Criando o tabuleiro 5x5
let tabuleiro = [
  ['Água', 'Água', 'Água', 'Navio', 'Água'],
  ['Água', 'Navio', 'Água', 'Água', 'Água'],
  ['Água', 'Água', 'Água', 'Navio', 'Água'],
  ['Água', 'Navio', 'Água', 'Água', 'Água'],
  ['Água', 'Água', 'Água', 'Água', 'Navio']
];
// Função para o comando de atirar em uma posição
function atirar(linha, coluna) {
  if (tabuleiro[linha][coluna] === 'Navio') {
    console.log('Você acertou um navio!');
    tabuleiro[linha][coluna] = 'Acerto';
  } else {
    console.log('Você atingiu a água.');
    tabuleiro[linha][coluna] = 'Erro';
  }
}
// Testando a função
atirar(0, 3); // Saída: "Você acertou um navio!"
atirar(1, 1); // Saída: "Você acertou um navio!"
atirar(4, 4); // Saída: "Você acertou um navio!"
atirar(2, 2); // Saída: "Você atingiu a água."