const prompt = require('prompt-sync')({sigint:true});

const professor = require('./modules/professor.js');
const sala = require('./modules/sala.js');

let logged = true;

while(true) {
    logged = true;
    console.log("## GERENCIAMENTO GERAL ##");    
    
    console.log(`
O que você deseja gerenciar? 
1. Professor;
2. Sala;
0. Sair`);
    
    const opcaoGerenciamneto = +prompt();

    switch(opcaoGerenciamneto) {
        // GERENCIAMENTO GERAL
        case 1:

            // PROFESSOR
            while(logged) {

                console.log(`
## GERENCIAMENTO DE PROFESSORES ##
1. Cadastrar professor;
2. Listar professores;
3. Atualizar professor;
4. Remover cadastro de professor;
0. Voltar`
                );
                const opcaoProfessor = +prompt();
                    switch(opcaoProfessor) {
                        case 1:
                            professor.criar();                            
                            break;
                        case 2:
                            professor.listar();
                            break;
                        case 3:
                            professor.atualizar();
                            break;
                        case 4:
                            professor.remover();
                            break;
                        case 0:
                            logged = false;
                            break;
                        default:
                            console.log("Opção não encontrada");
                            break;
                    }
                    
                
            } // PROFESSOR
            break;
        case 2:
        // SALA
            
        while(logged) {

            console.log(`
## GERENCIAMENTO DE SALAS ##
1. Cadastrar sala;
2. Listar salas;
3. Atualizar sala;
4. Remover cadastro de sala;
0. Voltar`
            );
            const opcaoSala = +prompt();
                switch(opcaoSala) {
                    case 1:
                        sala.criar();                            
                        break;
                    case 2:
                        sala.listar();
                        break;
                    case 3:
                        sala.atualizar();
                        break;
                    case 4:
                        sala.remover();
                        break;
                    case 0:
                        logged = false;
                        break;
                    default:
                        console.log("Opção não encontrada");
                        break;
                }
                
            
        } // SALA
        break;
            
        // GERENCIAMENTO GERAL
        case 0:
            return;
        default:
            console.log("Opção não encontrada");
            break;

    }
            

}

