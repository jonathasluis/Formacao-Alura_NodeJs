import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Rodrigo', 'r@r.com', '2021-01-01')
console.log(novoUser.exibirInfos()) 

const novoAdmin = new Admin('Hugo', 'h@h.com','2021-01-01')
console.log(novoAdmin.exibirInfos())

const novoDocente = new Docente('Rafael', 'r@r.com','2021-01-01')
console.log(novoDocente.exibirInfos('Rodrigo', 'JavaScript'))