"use strict";
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Player extends Usuario {
    constructor(nome, idade, jogo) {
        super(nome, idade);
        this.jogo = jogo;
    }
    dizerOJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }
    static queHorasSao() {
        return Date();
    }
}
const jogador = new Player('Hector', 20, 'Ghost Of Tsushima');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());
class Jogo {
    constructor(nome) {
        this.nome = nome;
    }
    dizerNome() {
        return this.nome;
    }
}
class JogoComDescricao extends Jogo {
    constructor(nome, descricao) {
        super(nome);
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome} e ${this.descricao}`;
    }
}
const ghost = new JogoComDescricao('Fifa', 'Voce vai passar raiva');
console.log(ghost.dizerNome() && ghost.dizerNomeComDescricao());
class JogoComDescricao2 {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome} e ${this.descricao}`;
    }
}
const obj = {
    descricao: 'descricao do jogo',
    nome: 'Fifa',
    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome} e ${this.descricao}`;
    }
};
