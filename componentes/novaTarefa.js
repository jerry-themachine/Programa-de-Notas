
import { Tarefa_1 } from "./criaTarefa.js";

export const novaTarefa = (evento) => {     
    
    const lista = document.getElementById('lista');
    const novoInput = document.getElementById("input");
    const dataInput = document.getElementById("data");
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const ult = tarefasCadastradas.slice(-1)      

    lista.innerHTML = " ";

    ult.forEach((tarefa) => {            

        console.log(`Nova tarefa criada com sucesso!`);
        lista.appendChild(Tarefa_1(tarefa));
        novoInput.focus();
        novoInput.value = '';
        dataInput.value = '';          
        
    });  
    evento.preventDefault(); 
};