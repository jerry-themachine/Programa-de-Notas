import { carregaTarefa } from './carregaTarefa.js';
import { novaTarefa } from './novaTarefa.js';
import BotaoConclui from './concluirTarefa.js';
import BotaoDeleta from './deletaTarefa.js'; 

//Função para carregamento de tarefas (botão "carregar")
export const handleNovoItem = (evento) => {
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))||[];            
    const novoInput = document.getElementById("input");
    const valor = novoInput.value;
    const dataInput = document.getElementById("data");
    const data = new Date(dataInput.value);

    //Formatando a data (dd/mm/aaaa)
    const dataFormatada = (data.getDate() + 1) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    const dados = { 
        valor,
        dataFormatada
    };
    const tarefasAtualizadas = [...tarefas, dados];

    //Inserindo itens no Local Storage
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
    
    carregaTarefa();    
    evento.preventDefault();       
};

//Função para criação de tarefa (botão "novo item")
export const handleNovoItem_1 = (evento) => {
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];        
    const novoInput = document.getElementById("input");
    const valor = novoInput.value;
    const dataInput = document.getElementById("data");
    const data = new Date(dataInput.value);

     //Formatando a data (dd/mm/aaaa)
    const dataFormatada = (data.getDate() + 1) + "/" + (data.getMonth() + 1) + "/" + data.getFullYear(); 
    const dados = { 
        valor,
        dataFormatada
    };
    const tarefasAtualizadas = [...tarefas, dados];

    //Inserindo itens no Local Storage
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
    
    novaTarefa();    
    evento.preventDefault();       
};

//Função para renderizar toadas as tarefas contidas no Local Storage
export const Tarefa = ({ valor, dataFormatada }) => {    

    const tarefa = document.createElement('li');//Criando elemento "li" no DOM
    tarefa.classList.add('item');//Criando classe "item" para o elemento "li" no DOM

    //Transformando a primeira letra de cada srting em maiúscula
    const conteudo = `<p class="content">${dataFormatada} * ${valor.trim().toLowerCase()
    .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</p>`;

    tarefa.innerHTML = conteudo;//Renderizando tarefa

    tarefa.appendChild(BotaoConclui());//Renderizando botão "Concluir"
    tarefa.appendChild(BotaoDeleta());//Renderizando botão "Deletar"
   
    return tarefa;
};

//Função para renderizar apenas a última tarefa criada
export const Tarefa_1 = ({ valor, dataFormatada }) => {   

    const tarefa_1 = document.createElement('li');//Criando elemento "li" no DOM
    tarefa_1.classList.add('item');//Criando classe "item" para o elemento "li" no DOM
        
    //Transformando a primeira letra de cada srting em maiúscula
    const conteudo_1 = `<p class="content">${dataFormatada} * ${valor.trim().toLowerCase()
    .replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</p>`;
        
    tarefa_1.innerHTML = conteudo_1;//Renderizando tarefa

    tarefa_1.appendChild(BotaoConclui());//Renderizando botão "Concluir"
    tarefa_1.appendChild(BotaoDeleta());//Renderizando botão "Deletar"

    return tarefa_1;
};