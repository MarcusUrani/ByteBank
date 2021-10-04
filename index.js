import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Marcus Urani", "05135163107", 3860942);
// const cliente2 = new cliente("Jade Eymard", "51124463109", 4523460);
// const cliente3 = new cliente("Vitor Gomes", "04912456710", 2654190);
// const cliente4 = new cliente("Cinira Ferreira", "51202417191", 2655630);

const conta1 = new ContaCorrente(cliente1, 101);
// const conta2 = new contaCorrente(cliente2, 102);
// const conta3 = new contaCorrente(cliente3, 105);
// const conta4 = new contaCorrente(cliente4, 105);

const contaPoupanca = new ContaPoupanca(100, cliente1, 101);

const contaSalario = new ContaSalario(cliente1);


contaPoupanca.sacar(20);
conta1.sacar(200);
contaSalario.depositar(5000);
contaSalario.sacar(500);

console.log(conta1);
console.log(contaPoupanca);
console.log(contaSalario);