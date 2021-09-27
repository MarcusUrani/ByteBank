import { cliente } from "./Cliente.js";
import { contaCorrente } from "./Conta_corrente.js";

const cliente1 = new cliente;
cliente1.nome = "Marcus";
cliente1.cpf = "05135163107";
cliente1.rg = 3860942;

const cliente2 = new cliente;
cliente2.nome = "Jade";
cliente2.cpf = "51202417191";
cliente2.rg = 3540853;

const conta2 = new contaCorrente;
conta2._cliente = cliente1;
conta2.agencia = 102;

const contaCorrenteMarcus = new contaCorrente;
contaCorrente._cliente = cliente1;
console.log(conta2.saldo);