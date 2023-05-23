import React from "react";
import './estilos.css'
function Caja(props){
    return(
        <div className="tarjetas">
            <h2>{ props.titulo }</h2>
            <p>{ props.cuerpo }</p>
            <a href="https://github.com/alangohe845"><button>Github</button></a>
        </div>
    );
}
export default Caja;