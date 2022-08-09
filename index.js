import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./docente.js";

const novoUser = new User('Eliezer', 'eliezermiguel@email.com', '2000-11-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Geraldo', 'geraldo@email.com', '1987-12-02')
console.log(novoAdmin.nome)
novoAdmin.nome = ''
console.log(novoAdmin.nome)