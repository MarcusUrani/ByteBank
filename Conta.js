export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if(valor <= 1) {
            return;
        } 
        this._saldo += valor;
        console.log("Depósito realizado com sucesso, seu saldo agora é de R$ " + this._saldo );
    }

    transferir(valor, conta) {
        if(this._tipo == "salario") {
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferência realizada com sucesso, seu saldo agora é de R$ ${this._saldo}`);
    }
}