// Atividade1 
/// Soma de matrizes
function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        let linha = [];
        for (let j = 0; j < matrizA[i].length; j++) {
            linha.push(matrizA[i][j] + matrizB[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}

// Definindo duas matrizes 3x3
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

// Chamando a função e exibindo o resultado
let matrizSoma = somarMatrizes(matriz1, matriz2);
console.log(matrizSoma);

//  Atividade2 - Escreva uma função que receba uma matriz 3x3 e suas transportas 

function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        let linha = [];
        for (let j = 0; j < matrizA[i].length; j++) {
            linha.push(matrizA[i][j] + matrizB[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}
function transporMatriz(matriz) {
    let transposta = [];
    for (let i = 0; i < matriz.length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}
// Definindo duas matrizes 3x3
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
// Chamando a função e exibindo o resultado
let matrizSoma = somarMatrizes(matriz1, matriz2);
console.log(matrizSoma);
// Chamando a função de transposição e exibindo o resultado
let matrizTransposta = transporMatriz(matriz1);
console.log(matrizTransposta);

///Atividade3
function somarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        let linha = [];
        for (let j = 0; j < matrizA[i].length; j++) {
            linha.push(matrizA[i][j] + matrizB[i][j]);
        }
        resultado.push(linha);
    }
    return resultado;
}
function transporMatriz(matriz) {
    let transposta = [];
    for (let i = 0; i < matriz.length; i++) {
        transposta[i] = [];
        for (let j = 0; j < matriz[i].length; j++) {
            transposta[i][j] = matriz[j][i];
        }
    }
    return transposta;
}
function multiplicarMatrizes(matrizA, matrizB) {
    let resultado = [];
    for (let i = 0; i < matrizA.length; i++) {
        let linha = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < matrizA[0].length; k++) {
                soma += matrizA[i][k] * matrizB[k][j];
            }
            linha.push(soma);
        }
        resultado.push(linha);
    }
    return resultado;
}
// Definindo matrizes 3x3
let matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
// Definindo matrizes 2x2
let matrizA = [
    [1, 2],
    [3, 4]
];
let matrizB = [
    [5, 6],
    [7, 8]
];
// Chamando funções e exibindo resultados
let matrizSoma = somarMatrizes(matriz1, matriz2);
console.log("Soma das matrizes:", matrizSoma);

let matrizTransposta = transporMatriz(matriz1);
console.log("Matriz transposta:", matrizTransposta);

let matrizMultiplicada = multiplicarMatrizes(matrizA, matrizB);
console.log("Multiplicação das matrizes 2x2:", matrizMultiplicada);




