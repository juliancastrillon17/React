import logo from './logo.svg';
import './App.css';
import Imagen from './image';
import Datos from './datos';
import Entradas from './entradas';
// import Boton from './boton';


function App() {
  return (
    <main>
      <header>
        {/* Pido el nombre del usuario para reflejarlo en el titulo y encabezado de la página */}
        <h1>Progración utilizando React, hola <span className="title"><Datos/></span></h1>
      </header>
      <center>
        { /* Llamado del módulo image */ }
        <Imagen/> 
        <p className="parrafo">
          Estás probando acciones con React desde el servidor local de tu máquina y através del puerto 3000 <br/>
          Si no me crees mira el dominio de la página justo ahora para que te des cuenta. <br/><br/>
          Ahora, ¿qué quieres hacer? Ingresa la información:  
        </p>

        <Entradas/>
        {/* <Boton/> */}
      </center>
    </main>
  );
}

export default App;
