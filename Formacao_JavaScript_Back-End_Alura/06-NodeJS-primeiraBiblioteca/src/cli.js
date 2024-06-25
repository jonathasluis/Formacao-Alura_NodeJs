import pegaArquivo from "./index.js";
import listaValidada from "./validacao.js";
import chalk from 'chalk';
import fs from 'fs';

const argumentos = process.argv;

async function imprimeLista(valida, lista, identificador = '') {
    if (valida) {
        console.log(chalk.yellow('Lista Validada'), chalk.blue(identificador), await listaValidada(lista));
    } else {
        console.log(chalk.yellow('Lista de Links'), chalk.blue(identificador), lista);
    }
}


async function processaTexto(argumentos) {
    try {
        const caminhoArquivo = argumentos[2];
        const valida = argumentos[3] === '--valida';

        if (fs.lstatSync(caminhoArquivo).isFile()) {
            const resultado = await pegaArquivo(caminhoArquivo);
            imprimeLista(valida, resultado);
        } else if (fs.lstatSync(caminhoArquivo).isDirectory()) {
            const arquivos = await fs.promises.readdir(caminhoArquivo);
            arquivos.forEach(async (arquivo) => {
                const lista = await pegaArquivo(`${caminhoArquivo}/${arquivo}`)
                imprimeLista(valida, lista, `${caminhoArquivo}/${arquivo}`);
            })
        }
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red('Não tem arquivo aqui!'));
            return;
        }
    }
}

processaTexto(argumentos);