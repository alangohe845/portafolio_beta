import React, { useState, useEffect } from "react";
import axios from "axios";
import "./loading.css"

function Quitar() {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tiempoCarga, setTiempoCarga] = useState(3000);

  const handleMostrarComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };

  const handleTiempoCargaChange = (event) => {
    setTiempoCarga(parseInt(event.target.value));
  };

  return (
    <div>
      <button onClick={handleMostrarComponente}>
        {mostrarComponente ? "Desconectar" : "Conectar"}
      </button>
      {mostrarComponente && (
        <>
          <Componente setIsLoading={setIsLoading} tiempoCarga={tiempoCarga} />
        </>
      )}
      {isLoading && <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
    </div>
  );
}

function Componente({ setIsLoading, tiempoCarga }) {
  const [mediciones, setMediciones] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(async () => {
      const res = await axios.get(
        "https://backend-vf-12.vercel.app/api/ultimo"
      );
      setMediciones(res.data);
      setIsLoading(false);
    }, tiempoCarga);

    return () => clearTimeout(timeoutId);
  }, [tiempoCarga]);

  return (
    <div>
      <h4>Conectado con éxito</h4>
      {mediciones.map((medicion) => (
        <div key={medicion.id}>
          <p>Temperatura {medicion.Temperatura}</p>
          <p>Humedad {medicion.Humedad_atm}</p>
          <p>Temperatura {medicion.Humedad_cultivo_1}</p>
          <p>Temperatura {medicion.Humedad_cultivo_2}</p>
        </div>
      ))}
    </div>
  );
}

export default Quitar;
