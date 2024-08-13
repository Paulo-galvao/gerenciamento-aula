const prompt = require('prompt-sync')({sigint:true});
const db = [];
let lastId = 0;

function model() {
    const numero = prompt("Digite o numero: ");
    const id = lastId;

    if(numero != "" && !isNaN(numero)) {
        return {
            id,
            numero
        }
    } else {
        return undefined;
    }
}

function criar() {
    lastId++;
    const cadastro = model();
    if(cadastro != undefined) {
        db.push(cadastro);
        console.log("Cadastro efetuado com sucesso");
    } else {
        console.log("Dados invalidos");
    }
}

function listar() {
    if(db.length > 0) {
        console.log("Lista atualizada");
        db.forEach(el => console.log(`ID: ${el.id}\nNome: ${el.numero}`))
    } else {
        console.log("Ainda não possuimos nenhum cadastro");
    }
}

function atualizar() {
    if(db.length > 0) { 
        console.log("Escolha o item a ser atualizado pelo seu ID:");
        listar();
        const id = prompt();
        if(id > 0) {
            let index = db.findIndex( el => id == el.id);
            if(index != -1 ) {
                let novoElemento = model();
                if(novoElemento != undefined) {
                    db[index] = novoElemento;
                    console.log("Cadastro atualizado com sucesso");
                } else {
                    console.log("Dados invalidos");
                }
            } else {
                console.log("ID não encontrado");
            }
        } else {
            console.log("ID inválido");
        }
    } else {
        console.log("Ainda não possuimos nenhum cadastro");
    }
}

function remover() {
    if(db.length > 0) { 
        console.log("Escolha o item a ser removido pelo seu ID:");
        listar();
        const id = prompt();

        if(id > 0) {
            let index = db.findIndex( el => id == el.id);
            if(index != -1) {
                db.splice(db[index], 1);
                console.log("Cadastro removido com sucesso");
            } else {
                console.log("ID não encontrado");
            }
        } else {
            console.log("ID inválido");
        } 
    } else {
        console.log("Ainda não possuimos nenhum cadastro");
    }
}

module.exports = {criar, listar, atualizar, remover};