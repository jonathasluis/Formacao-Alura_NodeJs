const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

/*
Para finalizar, não estamos usando o parâmetro aluno, porque dessa vez estávamos interessados apenas no índice. 
Quando não utilizamos o primeiro parâmetro, uma convenção que você pode encontrar é o uso do underline (_) 
em vez de nomear o parâmetro, então em vez de alunos.filter(aluno, indice) fica alunos.filter(_, indice). 
Só de fazer isso o JS vai saber que não estamos utilizando esse parâmetro.
*/

// 1 parametro valor, 2 indice

const reprovados = alunos.filter((_, indice) => { 
  return medias[indice] < 7;
});

console.log(reprovados);