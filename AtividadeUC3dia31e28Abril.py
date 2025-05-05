

## Atividade aula 2 - programa jogo da forca 
 
 import random

# Lista de palavras polissílabas

palavras_polissilabas = [
    'computador', 'universidade', 'bicicleta', 'hospitalar',
    'biblioteca', 'matemática', 'engenharia', 'eletricidade',
    'fotografia', 'científico'
]

def escolher_palavra(lista):
    """Escolhe aleatoriamente uma palavra da lista."""
    return random.choice(lista)

def mostrar_palavra(palavra, letras_descobertas):
    """Mostra a palavra com letras descobertas e oculta as restantes com '_'."""
    return ' '.join([letra if letra in letras_descobertas else '_' for letra in palavra])

def jogar_forca():
    palavra = escolher_palavra(palavras_polissilabas)
    letras_certas = set()
    letras_erradas = set()
    tentativas = 6

    print("Bem-vindo ao Jogo da Forca - Palavras Polissílabas!")

    while tentativas > 0:
        print("\nPalavra:", mostrar_palavra(palavra, letras_certas))
        print(f"Erros: {' '.join(sorted(letras_erradas))}")
        print(f"Tentativas restantes: {tentativas}")

        tentativa = input("Digite uma letra: ").lower()

        if not tentativa.isalpha() or len(tentativa) != 1:
            print(" Digite apenas uma letra válida.")
            continue

        if tentativa in letras_certas or tentativa in letras_erradas:
            print(" Você já tentou essa letra.")
            continue

        if tentativa in palavra:
            letras_certas.add(tentativa)
            print(" Letra correta!")
        else:
            letras_erradas.add(tentativa)
            tentativas -= 1
            print(" Letra incorreta.")

        if set(palavra) <= letras_certas:
            print("\n Parabéns! Você acertou a palavra:", palavra)
            break
    else:
        print("\n Fim de jogo. A palavra era:", palavra)

# Mostre-o 
jogar_forca()

## Atividade aula 3 -

def filtrar_produtos_basicos(produtos):
    # Filtra produtos com preço acima de 1000
    return [produto for produto in produtos if produto["preco"] > 1000]

# Lista de produtos de mercado
produtos = [
    {"nome": "Arroz 5kg", "preco": 25},
    {"nome": "Leite 1L", "preco": 6},
    {"nome": "Café 500g", "preco": 46},
    {"nome": "Caixa de chocolate", "preco": 15},
    {"nome": "Cesta Básica", "preco": 1500},  # Exemplo de item caro
    {"nome": "Kit Limpeza Completo", "preco": 1200}
]

# Chama a função
produtos_basicos = filtrar_produtos_basicos(produtos)

print("Produtos com preço maior que R$1000:")
for p in produtos_basicos:
    print(f"- {p['nome']}: R$ {p['preco']}")

# Lista de colaboradores
colaboradores = []

def adicionar_colaborador(id, nome, salario):
    # Adiciona colaborador na lista
    colaboradores.append({"id": id, "nome": nome, "salario": salario})
    print(f"Colaborador {nome} adicionado com sucesso!")

def buscar_colaborador_por_id(id):
    # Procura colaborador por ID
    for colaborador in colaboradores:
        if colaborador["id"] == id:
            return colaborador
    return None

def listar_colaboradores_com_salario_acima(valor):
    # Lista colaboradores com salário maior que o valor dado
    return [c for c in colaboradores if c["salario"] > valor]

# Adicionando colaboradores
adicionar_colaborador(1, "João", 2000)
adicionar_colaborador(2, "Maria", 3500)
adicionar_colaborador(3, "Carlos", 1800)

# Buscar colaborador por ID
print("\nBuscar colaborador com ID 2:")
colab = buscar_colaborador_por_id(2)
if colab:
    print(f"Nome: {colab['nome']}, Salário: R${colab['salario']}")
else:
    print("Colaborador não encontrado.")

# Listar colaboradores com salário acima de R$2500
print("\nColaboradores com salário acima de R$2500:")
acima = listar_colaboradores_com_salario_acima(2500)
for c in acima:
    print(f"- {c['nome']}: R$ {c['salario']}")
## Sua quantiade
# Lista de produtos de mercado
produtos = [
    {"nome": "Arroz 5kg", "preco": 25},
    {"nome": "Leite 1L", "preco": 6},
    {"nome": "Café 500g", "preco": 20},
    {"nome": "Caixa de chocolate", "preco": 15},
    {"nome": "Cesta Básica", "preco": 1500},
    {"nome": "Kit Limpeza Completo", "preco": 1200}
]

# Conta quantos produtos existem na lista
quantidade = len(produtos)

# Mostra o resultado
print(f"Quantidade de produtos na lista: {quantidade}")

## Remoção de duplicatas

# Lista de produtos de mercado
produtos = [
    {"nome": "Arroz 5kg", "preco": 25},
    {"nome": "Leite 1L", "preco": 6},
    {"nome": "Café 500g", "preco": 20},
    {"nome": "Kit Limpeza", "preco": 1200},
    {"nome": "Cesta Básica", "preco": 1500},
    {"nome": "Caixa de Chocolate", "preco": 15}
]

# 1. Duplicar o primeiro produto
produtos.append(produtos[0])

print("\nLista com duplicata adicionada:")
for p in produtos:
    print(p)

# 2. Remover duplicatas convertendo para tuplas e usando set
produtos_unicos = list({tuple(p.items()) for p in produtos})

# 3. Converter de volta para dicionário
produtos_sem_duplicatas = [dict(p) for p in produtos_unicos]

print("\nLista sem duplicatas:")
for p in produtos_sem_duplicatas:
    print(p)

## Armazenamento de dados

# Lista para armazenar os colaboradores
colaboradores = []

# Função para adicionar um novo colaborador
def adicionar_colaborador(id, nome, cargo, salario):
    """Adiciona um colaborador à lista."""
    colaboradores.append({"id": id, "nome": nome, "cargo": cargo, "salario": salario})
    print(f"Colaborador {nome} (Cargo: {cargo}) adicionado com sucesso!")

# Função para buscar colaborador por ID
def buscar_colaborador_por_id(id):
    """Busca um colaborador pelo ID."""
    for colaborador in colaboradores:
        if colaborador["id"] == id:
            return colaborador
    return None  # Retorna None se não encontrar o colaborador

# Função para listar colaboradores com salário acima de X
def listar_colaboradores_acima_salario(valor):
    """Lista os colaboradores com salário acima de um valor específico."""
    return [colaborador for colaborador in colaboradores if colaborador["salario"] > valor]

# Adicionando colaboradores
adicionar_colaborador(1, "João Silva", "Gerente de Mercado", 4000)
adicionar_colaborador(2, "Maria Oliveira", "Caixa", 1500)
adicionar_colaborador(3, "Carlos Souza", "Repositor de Mercadoria", 1200)
adicionar_colaborador(4, "Fernanda Lima", "Caixa", 1700)
adicionar_colaborador(5, "Pedro Almeida", "Gerente de Mercado", 4500)

# Buscar colaborador por ID
print("\n Buscando colaborador com ID 3:")
colaborador = buscar_colaborador_por_id(3)
if colaborador:
    print(f"Nome: {colaborador['nome']}, Cargo: {colaborador['cargo']}, Salário: R${colaborador['salario']}")
else:
    print("Colaborador não encontrado.")

# Listar colaboradores com salário acima de R$2000
print("\n Colaboradores com salário acima de R$2000:")
colaboradores_acima = listar_colaboradores_acima_salario(2000)
for colab in colaboradores_acima:
    print(f"- {colab['nome']} ({colab['cargo']}): R$ {colab['salario']}")
