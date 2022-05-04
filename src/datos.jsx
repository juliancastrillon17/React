import React from 'react';
import './App.css';
// import App from './App.js';

function Datos(){

    window.addEventListener('load',()=>{
        let span = document.querySelector('.title');
        return(
            span.innerHTML = prompt("Ingrese por favor su nombre de nuevo")
        );
    })
}

export default Datos; 