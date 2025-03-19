///////////////////////////////////////////////////////////////////////////////////////

function calcularMedia() {
    let notas = [];
    
    for (let i = 0; i < 4; i++) {
        let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota (0 a 10):`));
        
        while (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida! Digite um valor entre 0 e 10.");
            nota = parseFloat(prompt(`Digite a ${i + 1}ª nota (0 a 10):`));
        }
        
        notas.push(nota);
    }

    // Calcule a média
    let media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    // Exiba o resultado
    console.log(`Média: ${media.toFixed(2)}\n${media >= 7 ? "Aprovado! " : "Reprovado! "}`);
}

// Chame a função
calcularMedia();
  
///////////////////////////////////////////////////////////////////////////////////////

// Soma de números pares em intervalos

function somaNumerosPares() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let fim = parseInt(prompt("Digite o número final:"));

    while (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        alert("Valores inválidos! O número inicial deve ser menor ou igual ao número final.");
        inicio = parseInt(prompt("Digite o número inicial:"));
        fim = parseInt(prompt("Digite o número final:"));
    }

    let soma = 0;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }

    console.log(`A soma dos números pares entre ${inicio} e ${fim} é: ${soma}`);
}

// Chame a função
somaNumerosPares();

/////////////////////////////////////////////////////////////////////////////////////////


// Verificação de palíndromo

// Função para verificar se a entrada é um palíndromo
function verificarPalindromo() {
    let texto = prompt("Digite uma palavra ou frase:").toLowerCase().replace(/ /g, "");

    let invertida = texto.split("").reverse().join("");

    if (texto === invertida) {
        alert("É palíndromo! ");
    } else {
        alert("Não é palíndromo! ");
    }
}

// Chame a função
verificarPalindromo();

//////////////////////////////////////////////////////////////////////////////////////////


// Cálculo de juros simples

// Chame a função
calcularJurosSimples();


// Função para calcular o montante com juros simples
function calcularJurosSimples() {
    let P = parseFloat(prompt("Digite o valor principal (P):"));
    let r = parseFloat(prompt("Digite a taxa de juros anual (%) (r):")) / 100;
    let t = parseFloat(prompt("Digite o tempo em anos (t):"));
    let m = p * (1 + r * t);
    console.log("montante final:",M);
}
 // Chame a função

    calcularJurosSimples();

//////////////////////////////////////////////////////////////////////////////////////////

// Contagem de Dígitos 


// Função para contar os dígitos de um número inteiro positivo
function contarDigitos() {
    let numero = prompt("Digite um número inteiro positivo:");

    // Verifica se a entrada é válida (só contém dígitos e é maior que zero)
    if (!/^\d+$/.test(numero) || parseInt(numero) <= 0) {
        alert("Valor inválido! Por favor, digite um número inteiro positivo.");
        return;
    }

    let quantidadeDigitos = numero.length;

    // Exibe o resultado
    alert(`O número ${numero} possui ${quantidadeDigitos} dígitos.`);
}

// Chame a função

contarDigitos();


/////////////////////// Exercício feito usando funções ////////////////////////////////////////