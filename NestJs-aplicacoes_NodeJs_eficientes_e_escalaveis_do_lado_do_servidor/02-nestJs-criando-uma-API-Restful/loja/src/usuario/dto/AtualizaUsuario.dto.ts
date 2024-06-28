import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEhUnico } from "../validacao/email-eh-unico.validator";

export class AtualizaUsuarioDto {

    @IsNotEmpty({message: 'Nome é obrigatório'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'E-mail inválido'})
    @EmailEhUnico({message: 'E-mail já cadastrado'})
    @IsOptional()
    email: string;

    @MinLength(6, {message: 'Senha deve ter no mínimo 6 caracteres'})
    @IsOptional()
    senha: string;
}