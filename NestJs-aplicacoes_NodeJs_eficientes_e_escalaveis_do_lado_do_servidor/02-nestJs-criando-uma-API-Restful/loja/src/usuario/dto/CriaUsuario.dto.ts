import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class criarUsuarioDto {

    @IsNotEmpty({message: 'Nome é obrigatório'})
    nome: string;

    @IsEmail(undefined, {message: 'E-mail inválido'})
    @EmailEhUnico({message: 'E-mail já cadastrado'})
    email: string;

    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    senha: string;
}