const prompt = require('prompt-sync')({sigint:true});

const professor = require('./modules/professor.js')

let logged = true;

while(true) {
    logged = true;
    console.log("## GERENCIAMENTO GERAL ##");    
    
    console.log(`
O que você deseja gerenciar? 
1. Professor; 
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
        // GERENCIAMENTO GERAL
        case 0:
            return;
        default:
            console.log("Opção não encontrada");
            break;

    }
            

}

