//classes e funções

// STATIC
class Usuario{
    public nome;
    public idade;
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

class Player extends Usuario{
    public jogo;
    constructor(nome: string, idade: number, jogo: string){
        super(nome, idade);
        this.jogo = jogo;
    }

    dizerOJogoAtual(){
        return `Estou jogando, no momento: ${this.jogo}`
    }

    static queHorasSao(){
        return Date();
    }
}

const jogador = new Player('Hector', 20, 'Ghost Of Tsushima');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHorasSao());


//Private, protected e public

class Jogo{
    protected nome;
    //não funcionaria classe JogoComDescricao
    // private nome;
    constructor(nome: string){
        this.nome = nome;
    }

    dizerNome(){
        return this.nome
    }
}

class JogoComDescricao extends Jogo{
       private descricao;
       constructor(nome: string, descricao: string){
           super(nome);
           this.descricao = descricao;
       }

       dizerNomeComDescricao(){
           return `O nome do jogo é: ${this.nome} e ${this.descricao}`
       }
}


const ghost = new JogoComDescricao('Fifa', 'Voce vai passar raiva');
console.log(ghost.dizerNome() && ghost.dizerNomeComDescricao());


// interfaces
interface IJogoComDescricao{
    descricao: string;
    nome: string,
    dizerNomeComDescricao(): string;
}

//implements
class JogoComDescricao2 implements IJogoComDescricao{
    public descricao;
    public nome;
    constructor(nome: string, descricao: string){
        this.nome = nome
        this.descricao = descricao;
    }

    dizerNomeComDescricao(){
        return `O nome do jogo é: ${this.nome} e ${this.descricao}`
    }
}

 
const obj: IJogoComDescricao = {
    descricao: 'descricao do jogo',
    nome: 'Fifa',
    dizerNomeComDescricao(){
        return `O nome do jogo é: ${this.nome} e ${this.descricao}`
    }
}