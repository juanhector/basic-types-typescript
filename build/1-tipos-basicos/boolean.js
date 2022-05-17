"use strict";
let estaAtivo;
estaAtivo = true;
function mapearStatus(status) {
    if (status) {
        return `Usuario esta ativo`;
    }
    else {
        return `Usuario está inativo`;
    }
}
mapearStatus(false);
