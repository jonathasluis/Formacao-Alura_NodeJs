const objetoPessoa = {
    nome: 'jose',
    idade : 32,
    cpf : '111111'
}

/*console.log(objetoPessoa)
console.log(objetoPessoa.nome)
console.log(objetoPessoa["idade"])*/


console.log(objetoPessoa.telefone) // undefined
objetoPessoa.telefone = '999999999'
console.log(objetoPessoa.telefone)

objetoPessoa.nome = 'jose silva'
console.log(objetoPessoa)

delete objetoPessoa.telefone
console.log(objetoPessoa.telefone)
