import React from "react";
import './App.css';

function Entradas(){
    return(
        <div className="entradas">
            <form action="">
                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" placeholder="Escriba aquí su nombre"/> <br />
                <label htmlFor="numero">Número de teléfono:</label><br />
                <input type="text" id="numero" placeholder="Escriba aquí su número"/> <br />
                <label htmlFor="edad">Edad:</label><br />
                <input type="number" id="edad" placeholder="Ponga aquí su edad"/> <br />
            </form>
            <button type="button" id="boton">Enviar</button>
        </div>
    );
}


export default Entradas;
