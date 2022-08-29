import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscador.addEventListener('submit',buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    
    //Obtener datos del formularioa

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion ==='') {
        //El usuario lo deja vacio el campo, muestra error
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add ('error')

        setTimeout(() =>{
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        },3000);

        return;
    }
   const busqueda = new API(artista, cancion);
       busqueda.consultarAPI();
}
