export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
      this.#nome = nome
      this.#email = email
      this.#nascimento = nascimento
      this.#role = role || 'estudante'
      this.#ativo = ativo
    }
  
    #montaObjUser() {
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }

    exibirInfos() {
        const objUser = this.#montaObjUser()
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    set nascimento(nascimento) {
        this.#nascimento = nascimento;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        this.#role = role;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(ativo) {
        this.#ativo = ativo;
    }
  }