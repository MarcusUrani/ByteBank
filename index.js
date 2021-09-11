class cliente {
    nome;
    cpf;
    rg;
}

class contaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log("Saque realizado com sucesso, seu saldo agora é de " + this.saldo + " Reais");
            return valor;
        } else {
            console.log("O seu saldo não é suficiente pra realizar essa operação");
        }
    }

    depositar(valor) {
        if(valor <= 1) {
            return;
        } 
        this.saldo += valor;
        console.log("Depósito realizado com sucesso, seu saldo agora é de " + this.saldo + " reais");
    }
}

const cliente1 = new cliente;
cliente1.nome = "Marcus";
cliente1.cpf = 05135163107;
cliente1.rg = 3860942;


// const cliente2 = new cliente;
// cliente2.nome = "Cinira";
// cliente2.cpf = 51202417191;
// cliente2.rg = 4523942;

const contaCorrenteMarcus = new contaCorrente;
contaCorrenteMarcus.agencia = 101;
contaCorrenteMarcus.saldo = 100;
console.log(contaCorrenteMarcus.saldo + " Reais");


contaCorrenteMarcus.sacar(100);
contaCorrenteMarcus.depositar(100);
