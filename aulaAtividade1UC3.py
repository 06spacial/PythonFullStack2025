#Verificação de palavras
# palíndromo

def verificar_palindromo(entrada):
    entrada_processada = ''.join(entrada.split()).lower()
    if entrada_processada == entrada_processada[::-1]:
        return "É palíndromo"
    else:
        return "Não é palíndromo"

entrada = input("Digite uma palavra ou frase: ")

# Exibição do resultado
resultado = verificar_palindromo(entrada)
print(resultado)

## Verificar artigos 

artigos = ["o", "a", "os", "as", "um", "uma", "uns", "umas"]
entrada = input("Digite uma palavra ou frase: ")
palavras = entrada.lower().split()
tem_artigo = any(palavra in artigos for palavra in palavras)
if tem_artigo:
    print("Contém artigo.")
else:
    print("Não contém artigo.")



