//Importando componentes para criar, inserir, riscar, e deletar tarefas
import BotaoConclui from './concluirTarefa.js';
import BotaoDeleta from './deletaTarefa.js';

//Criando array para armazenar tarefas
let tarefas = [];

export let criarTarefa = (evento) => { //Criando evento de click para inserir nova lista

    var novoInput = document.getElementById("input");
    var dataInput = document.getElementById("data");

    //Validação de formulário de inserção de tarefas
    novoInput.oninvalid = function () {

        this.setCustomValidity('');
        if(!this.validity.valid){

           this.setCustomValidity(`Por favor preencha este campo`);
        }else{    
            
            //Validação de formulário de inserção de datas
            dataInput.oninvalid = function () {

                this.setCustomValidity('');
                if((!this.validity.valid) || (!novoInput.validity.valid)){

                    this.setCustomValidity(`Por favor preencha a data`);
                }else{

                    dataInput.setCustomValidity(' ');

            
                            
                    evento.preventDefault();

                    //let input = document.querySelector('[data-form-input]');
                    let valor = novoInput.value;
                    let lista = document.querySelector('[data-list]');
                    let tarefa = document.createElement('li'); // Criando um novo item dentro de DOM através de Javascript                
                    //let data = document.querySelector('[data-form-calendario]')
                    let data = new Date(dataInput.value);
                    let dataFormatada = (data.getDate() + 1) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(); 
                    //+ " às " data.getTime() + data.getTimezoneOffset() * -60 * 1000).toUTCString().slice(0, 24); 

                        
                    tarefa.classList.add('item')// Adicionando a class 'item' ao elemento 'li'
                    let conteudo = `<p class="content">${valor.toUpperCase()} ${dataFormatada}</p>`
                    tarefa.innerHTML = conteudo;
                    lista.appendChild(tarefa); //Inserindo o elemento 'li' no final do nó, dentro do elemento 'ul'

                    //criando objeto JSON
                    let dados = {
                        valor, dataFormatada
                    }

                    //Inserindo tarefaas no array 
                    tarefas.push(dados);

                    //Transformando objeto em string e armazenando em Local Storage
                    localStorage.setItem('tarefas', JSON.stringify(tarefas))

                    tarefa.appendChild(BotaoConclui());
                    tarefa.appendChild(BotaoDeleta());
                    novoInput.value = ''; //Limpando o elemento 'input' do formulário'
                    dataInput.value = '';  
                };
            };  
        };
    };
};
