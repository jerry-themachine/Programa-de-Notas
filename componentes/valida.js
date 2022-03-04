
import { handleNovoItem_1 } from "./criaTarefa.js";
import { novaTarefa } from "./novaTarefa.js";

//Função para validação de entrada de dados nos inputs
export const Valida = function (evento) {

    const novoInput = document.getElementById("input");
    const dataInput = document.getElementById("data");

    //Validação de formulário de inserção de tarefas
    novoInput.oninvalid = function () {
        
        novoInput.setCustomValidity('');
        if(!novoInput.validity.valid){

           novoInput.setCustomValidity(`Por favor preencha este campo`);
        };   

        //Validação de formulário de inserção de datas
        dataInput.oninvalid = function () {

            dataInput.setCustomValidity('');
            if((!dataInput.validity.valid) || (!novoInput.validity.valid)){

                dataInput.setCustomValidity(`Por favor preencha a data`);
            }else{

                dataInput.setCustomValidity('');                          
                evento.preventDefault(); 
                handleNovoItem_1();
                //carregaTarefa();
                novaTarefa()           
            };                                
        };
    };   
};
