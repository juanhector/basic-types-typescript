let gatos: string[] = [
    'lora',
    'logan'
]

gatos.push("lebeau");


function exibeGatos(gatos: string[]){
    return `Os gatos são: ${gatos.join(', ')}`
}

exibeGatos(gatos)