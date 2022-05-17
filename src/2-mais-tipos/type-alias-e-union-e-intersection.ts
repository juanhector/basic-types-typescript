//type-alias
// o simbolo "?" no item, transforma ele em não obrigatório para preenchimento
type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}


const Hector: User = {
    name: 'Hector',
    lastName: 'Ribeiro',
    birthday: '22/12/2001',
    age: 20
}

/////////////////////////////////////////////////////////////////////////////

// Union types
// Serve para indicar se um parametro é de um tipo ou de outro
// | (como se fosse o ||)

type LogLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: LogLevel){
    console.log(`[${level}] - ${message}`);
}

logMessage ('Uma mensagem', 'debug');
logMessage ('Uma mensagem', 'info');
logMessage ('Uma mensagem', 'error');


/////////////////////////////////////////////////////////////////////////////


// intersection types: &
// Serve para combinar os type alias, no ex abaixo: User e About

type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;

const userWithProfile: Profile = {
    name: 'Hector',
    lastName: 'Ribeiro',
    birthday: '22/12/2001',
    age: 20,
    bio: 'Olá, eu sou o Hector',
    interests: ['jogos', 'musica', 'fotografia']
}