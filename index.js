import Cliente from "./classes/Cliente.js";
import ContaCorrente from "./classes/ContaCorrente.js";

/* SESSÃO DE CLIENTES */

const clienteUm = new Cliente();
clienteUm.nome = "Ricardo";
clienteUm.cpf = 11122233344;

const clienteDois = new Cliente();
clienteDois.nome = "Alice";
clienteDois.cpf = 99988877766;


/* SESSÃO DE CONTA CORRENTE */

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = clienteUm;
contaCorrenteRicardo.depositar(1000);

const contaDois = new ContaCorrente();
contaDois.cliente = clienteDois;
contaDois.agencia = 102 ;


console.log(contaCorrenteAlice)

console.log(contaCorrenteRicardo);







// contaCorrenteRicardo.transferir(1000, contaCorrenteAlice);

// console.log(contaCorrenteAlice);

// console.log(contaCorrenteRicardo);



//ESTUDO DA PROPOSTA DO USO DA CERQUILHA (#) PARA TORNAR ATRIBUTOS PRIVADOS

/**class cliente {
  nome;
  cpf;
}

class contaCorrente {
  agencia;
  #saldo = 0;

  sacar(valor) {
    if (valor >= 3000) {
      console.log(
        "O valor de saque é superior ao permitido em caixa eletrônico, dirija-se ao caixa"
      ); //caso o saque seja feito em caixa eletrônico
    } else if (this.#saldo >= valor) {
      console.log(`O valor sacado é de:\n ${valor}`);
      this.#saldo -= valor;
    } else {
      console.log("O valor solicitado é maior que o saldo em conta");
    }
  }

  depositar(valor) {
    if (valor > 0) {
      console.log(`O valor depositado é de:\n ${valor}`);
      this.#saldo += valor;
      console.log(`O saldo atual é de: ${this.#saldo}`); //Código adicionado para verificar o depósito acontecendo pois o campo é provado e não permite visualizar fora do escopo
    } else {
      console.log("Solicitação invalida");
    }
  }
}

const clienteUm = new cliente();
clienteUm.nome = "Ricardo";
clienteUm.cpf = 11122233344;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.sacar(100);
contaCorrenteRicardo.depositar(1100);
contaCorrenteRicardo.depositar(3000);

console.log(contaCorrenteRicardo);

/** Teste de saque superior ao valor determinado na regra de negócio
 * contaCorrenteRicardo.sacar(3001);
 */

/** Teste de depósito de valor negativo,para validação da integridade das transações
 * contaCorrenteRicardo.depositar(-1);
 */
