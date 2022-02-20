//Importando componentes para criar, inserir, riscar, e deletar tarefas
import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

let criarTarefa = ((evento) => { //Criando evento de click para inserir nova lista
    var novoInput = document.getElementById("input");

    novoInput.oninvalid = function () {
        this.setCustomValidity('');
        if(!this.validity.valid){
            this.setCustomValidity(`Preencha o campo para continuar`);               
        } else {   
                this.setCustomValidity(` `);              
                
            evento.preventDefault();

            //let input = document.querySelector('[data-form-input]');
            let valor = this.value;
            let lista = document.querySelector('[data-list]');
            let tarefa = document.createElement('li'); // Criando um novo item dentro de DOM através de Javascript                
                
            tarefa.classList.add('item')// Adicionando a class 'item' ao elemento 'li'
            let conteudo = `<p class="content">${valor}</p>`
            tarefa.innerHTML = conteudo;
            lista.appendChild(tarefa); //Inserindo o elemento 'li' no final do nó, dentro do elemento 'ul'
            tarefa.appendChild(BotaoConclui());
            tarefa.appendChild(BotaoDeleta());
            this.value = ''; //Limpando o elemento 'input' do formulário'
        }
    };    
});

//Selecionando um elemento pelo data atribut
let novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);//Invocando o evento com a function 'criarTerefa'


