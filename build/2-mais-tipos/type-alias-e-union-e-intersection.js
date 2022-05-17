"use strict";
const Hector = {
    name: 'Hector',
    lastName: 'Ribeiro',
    birthday: '22/12/2001',
    age: 20
};
function logMessage(message, level) {
    console.log(`[${level}] - ${message}`);
}
logMessage('Uma mensagem', 'debug');
logMessage('Uma mensagem', 'info');
logMessage('Uma mensagem', 'error');
const userWithProfile = {
    name: 'Hector',
    lastName: 'Ribeiro',
    birthday: '22/12/2001',
    age: 20,
    bio: 'Olá, eu sou o Hector',
    interests: ['jogos', 'musica', 'fotografia']
};
