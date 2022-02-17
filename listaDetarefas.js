//Criando novas listas, inseridno e riscando a palavra após clicar no botão concluir
(() => { let criarTarefa = ((evento) => { //Criando evento de click para inserir nova lista
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

    let BotaoConclui = () => {

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

     //Criando a função para deletar uma tarefa
    let BotaoDeleta = () => {

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
    }


})();
