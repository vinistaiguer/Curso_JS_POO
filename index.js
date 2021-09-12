import Cliente from "./classes/Cliente.js";
import ContaCorrente from "./classes/ContaCorrente.js";



const clienteUm = new Cliente("Ricardo", 11122233344);

const clienteDois = new Cliente("Alice", 99988877766);

const clienteTres = new Cliente("Vinícius", 99999999999);

const clienteQuatro = new Cliente("Beatriz", 99999999998)



const contaTres = new ContaCorrente(2021 , clienteTres);
contaTres.depositar(1000000);

const contaQuatro = new ContaCorrente(2021, clienteQuatro);
contaQuatro.depositar(2000000);


const contaUm = new ContaCorrente(1001 , clienteUm);
contaUm.depositar(1000);


const contaDois = new ContaCorrente(102 , clienteDois);
contaDois.depositar(500);

console.log(ContaCorrente.numeroDeContas);

console.log(contaTres);

console.log(contaQuatro);


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
