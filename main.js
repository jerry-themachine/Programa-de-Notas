
import { Valida } from './componentes/valida.js';
import { carregaTarefa } from './componentes/carregaTarefa.js';
//import {handleNovoItem} from './componentes/criaTarefaOriginal.js';

const criandoTarefa = document.getElementById('form-button');
const carregandoTarefas = document.getElementById('form-button-2');

criandoTarefa.addEventListener('click', Valida);
carregandoTarefas.addEventListener('click', carregaTarefa);
