import { cliente } from "./Cliente.js";
import { contaCorrente } from "./Conta_corrente.js";

const cliente1 = new cliente("Marcus Urani", "05135163107", 3860942);

const cliente2 = new cliente("Jade Eymard", "51124463109", 4523460);

const conta1 = new contaCorrente(cliente1, 101);

const conta2 = new contaCorrente(cliente2, 102);

console.log(conta1);
console.log(conta2);