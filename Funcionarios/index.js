import { Funcionario } from "./Funcionario.js";
import { Diretor } from "./Diretor.js";
import { Gerente } from "./Gerente.js";
import { SistemaAutenticacao } from "../sistemaAutenticacao.js";
import { Cliente } from "../Cliente.js";

const diretor = new Diretor("Marcus", 15000, "05135163107");
const gerente = new Gerente("Marcus Vinícius", 7500, "05135163107");
const cliente1 = new Cliente("Marcus Vinicius", "05135163107", 3860942, "12345");
diretor.cadastrarSenha("12345");
gerente.cadastrarSenha("1234567");

const ClienteLogado = SistemaAutenticacao.login(cliente1, "12345");
const logado = SistemaAutenticacao.login(gerente, "1234567");
const estaLogado = SistemaAutenticacao.login(diretor, "12345");

console.log(estaLogado, logado, ClienteLogado);