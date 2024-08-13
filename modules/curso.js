const prompt = require('prompt-sync')({sigint:true});
const turno = require('./turno');

const db = [];
let lastId = 0;

function model() {
    if(turno.db.length == 0) {
        console.log("Ainda não possuimos nenhum cadastro de turno");
    } else {

        const id = lastId;
        const nome = prompt("Digite o nome do curso: ");
        const horasTotais = prompt("Digite a quantidade de horas totais: ");
        turno.listar();
        const idTurno = prompt("Escolha o ID do turno: ");
    
        if(nome != "" && !isNaN(horasTotais) && idTurno != "") {
            return {
                id,
                nome,
                horasTotais, 
                idTurno
            }
        } else {
            return undefined;
        }
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
        db.forEach(el => console.log(`ID: ${el.id}\nNome: ${el.nome} \nHoras Totais: ${el.horasTotais} \nID_turno: ${el.idTurno}`))
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