import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/mifoto.jpeg";
import logo from "./imgs/logo.png";
import { useState } from "react";
import Carrusel from "./carrusel";
import GoogleMap from "./mapsAPI";
import pdf from "./files/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCode,
  faFileLines,
  faGraduationCap,
  faHome,
  faImage,
  faLocationDot,
  faPen,
  faSchool,
  faUser,
  faUpload,
  faAngry,
} from "@fortawesome/free-solid-svg-icons";
import Caja from "./componentes/cards";
import foto1 from "./imgs/mockup1.jpeg";
import foto2 from "./imgs/mockup2.jpeg";
import Login from "./componentes/login";
import Logout from "./componentes/Close";
import LoginCerrar from "./componentes/Close";
import Quitar from "./componentes/quitar";
function Home() {
  return (
    <div>
      <Caja
        titulo="METODO RENDER"
        cuerpo="Todo componente de React, tiene un método Render que es el que se encarga de renderizar en el navegador el HTML correspondiente al componente. Este método se llama automáticamente cuando se crea un componente y cuando el estado del componente se actualiza (veremos esto más adelante)."
      />
      <Caja
        titulo="METODO ESTRICT MODE"
        cuerpo="StrictMode es una herramienta para destacar problemas potenciales en la aplicación. Al igual que Fragment , StrictMode no renderiza nada en la interfaz de usuario. Este modo también activa advertencias y comprobaciones adicionales para sus descendientes."
      />
      <Caja
        titulo="METODO RETURN"
        cuerpo="Return también hace que finalice la ejecución de una función. En el siguiente ejemplo, el primer return detiene la ejecución de la función y hace que el valor de la misma sea true. El return que devuelve false, nunca se ejecuta. Por tanto, Return se suele usar para interrumpir la instrucción de una función."
      />
    </div>
  );
}
function Nombre() {
  return (
    <div className="hogar2">
      <h2 className="hogar">Alan Gomez Hernandez</h2>
      
    </div>
  );
}
function UTD() {
  return (
    <div className="hogar2">
      <h2 className="hogar">UTD</h2>
      
    </div>
  );
}
function Carrera() {
  return (
    <div className="hogar2">
      <h2 className="hogar">Tecnologias </h2>
      <h4>de la</h4>
      <h2 className="hogar">Informacion</h2>
    </div>
  );
}
function Logo() {
  return (
    <div className="wrapper-center">
      <a href="https://utd.edu.mx/">
        <img
          alt="Escuela"
          className="fotopro"
          src={logo}
          style={{ alignSelf: "start" }}
        ></img>
      </a>
    </div>
  );
}
function Foto() {
  return (
    <div className="wrapper-center">
      <h2 className="hogar">Mi foto</h2>
      <img
        alt="Perfil"
        className="fotopro"
        src={img}
        style={{ alignSelf: "start" }}
      ></img>
    </div>
  );
}
function Alumnos() {
  return (
    <div className="wrapper-center">
      <iframe title="curriculum" src={pdf} height="70%" width="100%"></iframe>
    </div>
  );
}
function Login1() {
  return (
    <div className="hogar2">
      <Login />
      <Quitar/>
    </div>
  );
}
function Nueva1() {
  return (
    <div className="wrapper-center">
      <h2 className="hogar">Mockups</h2>
      <img
        alt="Perfil"
        className="fotopro"
        src={foto2}
        style={{ alignSelf: "start" }}
      ></img>
      <img
        alt="Perfil"
        className="fotopro"
        src={foto1}
        style={{ alignSelf: "start" }}
      ></img>
    </div>
  );
}

function App() {
  const links = [
    ["Home", faHome],
    ["Nombre", faPen],
    ["UTD", faSchool],
    ["Carrera", faCode],
    ["Logo", faGraduationCap],
    ["Foto", faUser],
    ["Alumnos", faFileLines],
    ["Mapa", faLocationDot],
    ["Galeria", faImage],
    ["Mockups", faUpload],
    ["Login", faAngry],
  ];

  const [nav, setNav] = useState(false);

  const navToggle = () => {
    setNav(!nav);
  };
  return (
    <div className="app">
      <nav className={`${nav ? "nav-open" : "nav-collapsed"}`}>
        <button className="nav-toggle" onClick={navToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          {links.map((link) => (
            <li key={link[0]}>
              <Link to={link[0] === "Home" ? "/" : link[0].toLowerCase()}>
                <FontAwesomeIcon
                  className="hash"
                  icon={link[1]}
                ></FontAwesomeIcon>
                <span className="nav-link-style">{link[0]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nombre" element={<Nombre />} />
        <Route path="/UTD" element={<UTD />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/carrera" element={<Carrera />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/galeria" element={<Carrusel />} />
        <Route path="/mapa" element={<GoogleMap />} />
        <Route path="/mockups" element={<Nueva1 />} />
        <Route path="/login" element={<Login1 />} />
      </Routes>
    </div>
  );
}

export default App;
