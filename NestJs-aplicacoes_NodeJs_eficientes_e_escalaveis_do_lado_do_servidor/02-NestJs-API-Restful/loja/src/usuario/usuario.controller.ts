import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { criarUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AtualizaUsuarioDto } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: criarUsuarioDto) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.id = uuid();
        await this.usuarioRepository.salvar(usuarioEntity);
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'Usuário criado com sucesso'
        };
    }

    @Get()
    async listarUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(usuario => new ListaUsuarioDTO(usuario.id, usuario.nome));
        return usuariosLista;
    }

    @Put('/:id')
    async atualizarUsuario(@Param('id') id : string, @Body() novosDados: AtualizaUsuarioDto) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados);

        return {
            usuario: new ListaUsuarioDTO(usuarioAtualizado.id, usuarioAtualizado.nome),
            message: 'Usuário atualizado com sucesso'
        };
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return {
            usuario: new ListaUsuarioDTO(usuarioRemovido.id, usuarioRemovido.nome),
            message: 'Usuário removido com sucesso'
        };
    }
}

