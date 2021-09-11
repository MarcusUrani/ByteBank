class cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente;
const cliente2 = new cliente;

cliente1.nome = "Marcus";
cliente1.cpf = 05135163107;
cliente1.agencia = 101;
cliente1.saldo = 0;
cliente1.rg = 3860942;

cliente2.nome = "Cinira";
cliente2.cpf = 51202417191;
cliente2.agencia = 1001;
cliente2.saldo = 3500.00;
cliente2.rg = 4523942;

console.log(cliente1, "\n\n", cliente2);