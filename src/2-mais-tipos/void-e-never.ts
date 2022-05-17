 //função sem retorno
 // valor padrao de funções que não retornam algo
 function principal(): void {
     console.log('executando')
}

principal();

//laços de repetição infinitos
//ou funções que disparam erros
function funcaoQueNuncaRetorna(): never{
    while(true){
    }
}

