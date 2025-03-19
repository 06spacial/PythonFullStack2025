## Aula 4

########################

## Identificação básica de usuário

nome = "João"
idade = 19
print(nome,idade)
 
#########################

## Teste com operações matemáticas básicas

numero = 50
a = 2
print("Somar:", numero + a)
print("Subtrair:", numero - a)
print("Multiplicar:", numero * a)
print("Dividir:", numero / a )

#########################

## Identificação básica do usuário2.
nome = "Bianca"
sobrenome = "Tavares"
print(nome,sobrenome)

#########################

## Teste 

x = 15
e = 20 
print("x é maior que y?",x > e)
print("x é igual y?",x == e)
print(f"x é menor que y? {x < e}")   

########################

tem_carteira = "sim"
idade = 18
tem_carro = "tem"
print("tem_carteira + idade + tem_carro")

#########################
contador = 0
contador += 5
contador -= 2
contador *= 3
print("Valor final do contador:", contador)

a = 10
b = 20
c = 30
media = (a + b + c) / 3
print("Média:", media)
print("A média é maior que 15 e menor que 25?", 15 < media < 25)

nota = int(input("Digite a sua nota: "))
if nota >= 60:
    print("Aprovado")
elif nota > 40:
    print("Recuperação")
else:
    print("Reprovado")

    dia_da_semana = 3
    dias = {
        1: "Domingo:",
        2: "Segunda:",
        3: "Terça",
        4: "Quarta",
        5: "Quinta",
        6: "Sexta",
        7: "Sábado"
    }
    print(dias.get(dia_semana, "Dia inválido"))
    #print(dias[2])