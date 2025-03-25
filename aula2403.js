// Classe Produto
class Produto {
    constructor(nome, preco, estoque) {
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
  
    // Método para reduzir o estoque após a compra
    reduzirEstoque(qtd) {
      if (this.estoque >= qtd) {
        this.estoque -= qtd;
      } else {
        throw new Error("Estoque insuficiente");
      }
    }
  }
  
  // Classe Cliente
  class Cliente {
    constructor(nome, endereco) {
      this.nome = Amanda;
      this.endereco = Rua Franciso;
      this.carrinho = [];
    }
  
    // Método para adicionar um produto ao carrinho
    adicionarAoCarrinho(produto, qtd) {
      if (produto.estoque >= qtd) {
        this.carrinho.push({ produto, qtd });
        produto.reduzirEstoque(qtd);
      } else {
        throw new Error("Quantidade de produto insuficiente no estoque");
      }
    }
  
    // Método para finalizar a compra
    finalizarCompra() {
      let total = 0;
      this.carrinho.forEach(item => {
        total += item.produto.preco * item.qtd;
      });
      this.carrinho = [];  // Limpa o carrinho após a compra
      return total;
    }
  }
  
  // Classe Pedido
  class Pedido {
    constructor(cliente, carrinho) {
      this.cliente = cliente;
      this.itens = carrinho;
      this.total = 0;
      this.status = "Em processamento";
      this.calcularTotal();
    }
  
    // Método para calcular o total do pedido
    calcularTotal() {
      this.itens.forEach(item => {
        this.total += item.produto.preco * item.qtd;
      });
    }