const prompt = require('prompt-sync')({sigint:true});

const professor = require('./modules/professor.js');
const sala = require('./modules/sala.js');
const turno = require('./modules/turno.js');
const curso = require('./modules/curso.js');
const materia = require('./modules/materia.js');
const aluno = require('./modules/aluno.js');
const aula = require('./modules/aula.js');

let logged = true;

while(true) {
    logged = true;
    console.log("## GERENCIAMENTO GERAL ##");    
    
    console.log(`
O que você deseja gerenciar? 
1. Professor;
2. Sala;
3. Turno;
4. Curso;
5. Materia;
6. Aluno;
7. Aula;
0. Sair`);
    
    const opcaoGerenciamneto = +prompt();

    switch(opcaoGerenciamneto) {
        // GERENCIAMENTO GERAL
        case 1:

            // PROFESSOR
            while(logged) {

                console.log(`\n
## GERENCIAMENTO DE PROFESSORES ##\n
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
## GERENCIAMENTO DE SALAS ##\n
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
            
        case 3:
            // TURNO
            while(logged) {

                console.log(`
## GERENCIAMENTO DE TURNO ##\n
1. Cadastrar turno;
2. Listar turnos;
3. Atualizar turno;
4. Remover cadastro de turno;
0. Voltar`
                );
                const opcaoTurno = +prompt();
                    switch(opcaoTurno) {
                        case 1:
                            turno.criar();                            
                            break;
                        case 2:
                            turno.listar();
                            break;
                        case 3:
                            turno.atualizar();
                            break;
                        case 4:
                            turno.remover();
                            break;
                        case 0:
                            logged = false;
                            break;
                        default:
                            console.log("Opção não encontrada");
                            break;
                    }
                    
                
            } // TURNO
            break;

            case 4:
                // CURSO
                while(logged) {
    
                    console.log(`
## GERENCIAMENTO DE CURSO ##\n
1. Cadastrar curso;
2. Listar cursos;
3. Atualizar curso;
4. Remover cadastro de curso;
0. Voltar`
                    );
                    const opcaoCurso = +prompt();
                        switch(opcaoCurso) {
                            case 1:
                                curso.criar();                            
                                break;
                            case 2:
                                curso.listar();
                                break;
                            case 3:
                                curso.atualizar();
                                break;
                            case 4:
                                curso.remover();
                                break;
                            case 0:
                                logged = false;
                                break;
                            default:
                                console.log("Opção não encontrada");
                                break;
                        }
                        
                    
                } // CURSO
                break;

                case 5:
                // MATERIA
                while(logged) {
    
                    console.log(`
## GERENCIAMENTO DE CURSO ##\n
1. Cadastrar materia;
2. Listar materias;
3. Atualizar materia;
4. Remover cadastro de materia;
0. Voltar`
                    );
                    const opcaoMateria = +prompt();
                        switch(opcaoMateria) {
                            case 1:
                                materia.criar();                            
                                break;
                            case 2:
                                materia.listar();
                                break;
                            case 3:
                                materia.atualizar();
                                break;
                            case 4:
                                materia.remover();
                                break;
                            case 0:
                                logged = false;
                                break;
                            default:
                                console.log("Opção não encontrada");
                                break;
                        }
                        
                    
                } // MATERIA
                break;

                case 6:
                // ALUNO
                while(logged) {
    
                    console.log(`
## GERENCIAMENTO DE CURSO ##\n
1. Cadastrar aluno;
2. Listar alunos;
3. Atualizar aluno;
4. Remover cadastro de aluno;
0. Voltar`
                    );
                    const opcaoAluno = +prompt();
                        switch(opcaoAluno) {
                            case 1:
                                aluno.criar();                            
                                break;
                            case 2:
                                aluno.listar();
                                break;
                            case 3:
                                aluno.atualizar();
                                break;
                            case 4:
                                aluno.remover();
                                break;
                            case 0:
                                logged = false;
                                break;
                            default:
                                console.log("Opção não encontrada");
                                break;
                        }
                        
                    
                } // ALUNO
                break;

                case 7:
                    // AULA
                    while(logged) {
        
                        console.log(`
## GERENCIAMENTO DE CURSO ##\n
1. Cadastrar aula;
2. Listar aula;
3. Atualizar aula;
4. Remover cadastro de aula;
0. Voltar`
                        );
                        const opcaoAula = +prompt();
                            switch(opcaoAula) {
                                case 1:
                                    aula.criar();                            
                                    break;
                                case 2:
                                    aula.listar();
                                    break;
                                case 3:
                                    aula.atualizar();
                                    break;
                                case 4:
                                    aula.remover();
                                    break;
                                case 0:
                                    logged = false;
                                    break;
                                default:
                                    console.log("Opção não encontrada");
                                    break;
                            }
                            
                        
                    } // AULA
                    break;
        
        // GERENCIAMENTO GERAL
        case 0:
            return;
        default:
            console.log("Opção não encontrada");
            break;

    }
            

}

