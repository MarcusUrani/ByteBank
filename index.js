import { cliente } from "./Cliente.js";
import { contaCorrente } from "./Conta_corrente.js";

const cliente1 = new cliente("Marcus Urani", "05135163107", 3860942);
const cliente2 = new cliente("Jade Eymard", "51124463109", 4523460);
const cliente3 = new cliente("Vitor Gomes", "04912456710", 2654190);
const cliente4 = new cliente("Cinira Ferreira", "51202417191", 2655630);

const conta1 = new contaCorrente(cliente1, 101);
const conta2 = new contaCorrente(cliente2, 102);
const conta3 = new contaCorrente(cliente3, 105);
const conta4 = new contaCorrente(cliente4, 105);

console.log(conta1);
console.log(conta2);
console.log(conta3);
console.log(conta4);
console.log(contaCorrente.numeroDeContas);