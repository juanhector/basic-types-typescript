let estaAtivo : boolean;

//...

estaAtivo = true;


function mapearStatus(status: boolean): String{
    if(status){
        return `Usuario esta ativo` 
    } else{
        return `Usuario está inativo`
    }
}

mapearStatus(false);