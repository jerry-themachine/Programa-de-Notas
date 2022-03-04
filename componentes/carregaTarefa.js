
import { Tarefa } from "./criaTarefa.js";

export const carregaTarefa = (evento) => { 
       
    const lista = document.getElementById('lista');
    const novoInput = document.getElementById("input");
    const dataInput = document.getElementById("data");    
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];       

    lista.innerHTML = " ";
    tarefasCadastradas.forEach((tarefa) => {
        
        console.log(`Tarefa carregada do Local Storage com sucesso!`);
        lista.appendChild(Tarefa(tarefa));
        novoInput.focus();
        novoInput.value = '';
        dataInput.value = '';

        evento.preventDefault(); 
    });      
    
    
};