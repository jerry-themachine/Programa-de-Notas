//Importando componentes para criar, inserir, riscar, e deletar tarefas
import BotaoConclui from './componentes/concluirTarefa.js';
import BotaoDeleta from './componentes/deletaTarefa.js';

let criarTarefa = (evento) => { //Criando evento de click para inserir nova lista

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
                    let dataFormatada = (data.getDate()) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(); 
                    //+ " às " data.getTime() + data.getTimezoneOffset() * -60 * 1000).toUTCString().slice(0, 24); 

                        
                    tarefa.classList.add('item')// Adicionando a class 'item' ao elemento 'li'
                    let conteudo = `<p class="content">${valor} ${dataFormatada}</p>`
                    tarefa.innerHTML = conteudo;
                    lista.appendChild(tarefa); //Inserindo o elemento 'li' no final do nó, dentro do elemento 'ul'
                    tarefa.appendChild(BotaoConclui());
                    tarefa.appendChild(BotaoDeleta());
                    novoInput.value = ''; //Limpando o elemento 'input' do formulário'
                    dataInput.value = '';  
                };
            };  
        };
    };
};

//Selecionando um elemento pelo data atribut
let novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criarTarefa);//Invocando o evento com a function 'criarTerefa'


