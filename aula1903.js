// Aula que fala sobre vetores
// Formação de lista
// Uso do push para adicionar um ou mais elemento 

//// Atividade1 ////
// Crie uma função que receba o array de números e que retorne a soma de todos 

function somaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let numeros1 = [1, 2, 3, 4, 5];
console.log("Soma do array:", somaArray(numeros1));

//// Atividade2 ////
// Crie uma função que receba um array de string e mostre o resultado em ordem alfabética

function ordenarStrings(arr) {
    return arr.sort();
}

let frutas2 = ["Banana", "Maçã", "Laranja", "Abacaxi"];
console.log("Frutas ordenadas:", ordenarStrings(frutas2));

//// Atividade3 ////
// Crie uma função que receba um array e que o retorne de forma duplicada 

function removerDuplicados(arr) {
    return [...new Set(arr)];
}

let numeros3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros3));

// solução para atividade 3 usando Set e também uma solução usando Filter:

function removerDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let numeros4 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros4)); 

////////////////////////////////////////////////////////
// Observação //
///// A atividade foi executada entorno do que foi passado em sala de aula. O assunto foi Vetores/Array - JavaScript
// Usou-se como exeplos em aula a lista com frutas //