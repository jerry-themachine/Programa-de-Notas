 //Criação de módulo para concluir tarefas

 //Criando a função para adicionar o botão concluir 
let BotaoConclui = () => {//Criando componete botão "Concluir" com letra maiúscula 

     let botaoConclui = document.createElement('button');

     botaoConclui.classList.add('check-button');// Adicionando a class 'check-button' ao elemento 'button'
     botaoConclui.innerText = 'Concluir';
     botaoConclui.addEventListener('click', concluirTarefa);    

     return botaoConclui;    
};

 //Criando a função para riscar a tarefa concluída
let concluirTarefa = (evento) => {

     let botaoConcluir = evento.target;// Criando variável para descobrir o elemento clicado través do 'target'
     let tarefCompleta = botaoConcluir.parentElement;// Pegando o pai do botão, o elemento 'li', utilizando  'parentElement'

     //Executando a classe 'done' no CSS a partir do momento de click do botão, através do método 'toggle'
     tarefCompleta.classList.toggle('done');//Toggle deveolve um booleano (verdaeiro/clicado ou falso/não-clicado) 
};

export default BotaoConclui;