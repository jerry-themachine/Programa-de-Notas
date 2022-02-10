
//Selecionando elemento pelo data atribut
let novaTarefa = document.querySelector('[data-form-button]');
let lista = document.querySelector('[data-list]');


let criarTarefa = ((evento) => { //Criando evento de click para inserir nova lista

    evento.preventDefault();

    let input = document.querySelector('[data-form-input]');
    let valor = input.value;
    let novaLista = document.createElement('li'); // Criando um novo item dentro de DOM através de Javascript

    novaLista.classList.add('item')// Adicionando a class 'item' ao elemento 'li'
    novaLista.textContent = valor;
    lista.appendChild(novaLista); //Inserindo o elemento 'li' no final do nó, dentro oa elemento 'ul'
    input.value = ''; //Limpando o elemento 'input' do formulário'
});

novaTarefa.addEventListener('click', criarTarefa);//Invocando o evento com a function 'criarTerefa'

