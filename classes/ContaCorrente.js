import Cliente from "./Cliente.js";

export class contaCorrente {
  agencia;
  _cliente;

  set cliente(novoValor){
    if(novoValor instanceof Cliente){
      this._cliente = novoValor;
    }
  }

  get cliente(){
    return this._cliente;
  }

  _saldo = 0;

  sacar(valor) {
    if (valor >= 3000) {
      console.log(
        "O valor de saque é superior ao permitido em caixa eletrônico, dirija-se ao caixa"
      ); //caso o saque seja feito em caixa eletrônico
    } else if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor; //o retorno deve ser colocado após as condições da regra, pois ele interrompe a execução do código
    } else {
      console.log("O valor solicitado é maior que o saldo em conta");
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return; //Colocar o return logo após a validação da condição é um caso e ERLY
    }
    this._saldo += valor;
  }

  transferir(valor, conta){
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);  
  }
}

export default contaCorrente;
