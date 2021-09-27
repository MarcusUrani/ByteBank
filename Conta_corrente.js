export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;


    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia;
        contaCorrente.numeroDeContas += 1;
    }

    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("Saque realizado com sucesso , seu saldo agora é de R$ " + this._saldo);
            return valor;
        } else {
            console.log("O seu saldo não é suficiente pra realizar essa operação");
        }
    }

    depositar(valor) {
        if(valor <= 1) {
            return;
        } 
        this._saldo += valor;
        console.log("Depósito realizado com sucesso, seu saldo agora é de R$ " + this._saldo );
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferência realizada com sucesso, seu saldo agora é de R$ ${this._saldo}`);
    }
}