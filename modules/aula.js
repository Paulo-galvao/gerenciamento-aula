const prompt = require('prompt-sync')({sigint:true});
const professor = require('./professor.js');
const materia = require('./materia.js');
const sala = require('./sala.js');

const db = [
    {
        id: 1,
        idProfessor: 1,
        idMateria: 1,
        idSala: 1
    }
];

let lastId;
if(db.length == 0) {
    lastId = 0;
} else {
    lastId = db[db.length - 1].id;
}

function model() {
    if(professor.db.length == 0) {
        console.log("Ainda não possuimos nenhum cadastro de professor");
    } else if(materia.db.length == 0) {
        console.log("Ainda não possuimos nenhum cadastro de materia");
    } else if(sala.db.length == 0) {
        console.log("Ainda não possuimos nenhum cadastro de sala");
    } else {

        const id = lastId;
        professor.listar();
        const idProfessor = prompt("Digite o ID do professor: ");
        materia.listar();
        const idMateria = prompt("Digite o ID da matéria: ");
        sala.listar();
        const idSala = prompt("Escolha o ID da sala: ");
    
        if(idProfessor != "" && idMateria != "" && idMateria != "") {
            return {
                id,
                idProfessor,
                idMateria, 
                idSala
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
        db.forEach(el => console.log(`ID: ${el.id}\nID_professor: ${el.idProfessor} \nID_materia: ${el.idMateria}\n ID_sala: ${el.idSala}`))
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

module.exports = {criar, listar, atualizar, remover, db};