  //Criação de módulo para deletar tarefas
  
  
  //Criando a função para adicionar o botão deletar
let BotaoDeleta = () => {//Criando componete botão "Deletar" com letra maiúscula

    let botaoDeleta = document.createElement('button');

    botaoDeleta.classList.add('delete-button');// Adicionando a class 'delete-button' ao elemento 'button'
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.addEventListener('click', deletarTarefa)        

    return botaoDeleta;    
};

let deletarTarefa = (evento) => {
    let botaoDeletar = evento.target;// Criando variável para descobrir o elemento clicado través do 'target'
    let deletaTarefa = botaoDeletar.parentElement;// Pegando o pai do botão, o elemento 'li', utilizando  'parentElement'
    deletaTarefa.remove();

    return botaoDeletar;
};

export default BotaoDeleta;