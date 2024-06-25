const user = {
    nome : "Jonathas",
    email : "jls@gmail.com",
    nascimento : "2001-12-23",
    role : "user",
    ativo : true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}
/*
user.exibirInfos()
const exibirInfos = user.exibirInfos.bind(user)
exibirInfos()
*/

const admin = {
    nome : "teste",
    email : "teste@gmail.com",
    nascimento : "2001-12-23",
    role : "admin",
    ativo : true,
    criarCurso() {
        console.log("Criar curso")
    }
}

Object.setPrototypeOf(admin,user)
admin.criarCurso()
admin.exibirInfos()