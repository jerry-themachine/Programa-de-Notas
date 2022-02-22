import {criarTarefa} from './componentes/criaTarefas.js';
//Selecionando um elemento pelo data atribut
let novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);//Invocando o evento com a function 'criarTerefa'


