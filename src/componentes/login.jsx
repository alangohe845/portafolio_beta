import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import "./login.css";
function Login() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const logeado_exito = (res) => {
    console.log("LOGUEADO CON ÉXITO:", res.profileObj);
    Swal.fire({
      icon: "success",
      title: "BIENEVENIDO APP UTD",
      text: "LOGUEADO CON EXITO",
      footer: '<a href="www.utd.edu.mx">Why do I have this issue?</a>',
    });
  };
  const fallo_login = (res) => {
    console.log("FALLO EN EL ACCESO:", res.profileObj);
    Swal.fire({
      icon: "error",
      title: "LAS CREDENCIALES SON ERRONEAS",
      text: "FALLO EN EL ACCESO",
      footer: '<a href="http://localhost:3000">Why do I have this issue?</a>',
    });
  };
  const LoginCerrar = () => {
    console.log("SESIÓN TERMINADA Gomez Hernandez");
    Swal.fire({
      icon: "success",
      title: "SESION TERMINADA",
      text: "SESION TERMINADA",
      footer: '<a href="www.utd.edu.mx">Why do I have this issue?</a>',
    });
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Agregar aquí la lógica para enviar los datos de inicio de sesión al servidor
  }
  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <center>
          <ReCAPTCHA
          className='hola'
            sitekey="6LcIDzglAAAAAAoqdz1oSj6eC0nYaCnSnH6o74Ko"
            onChange={onChange}
          />
          <GoogleLogin
          className='hola'
            clientId="869690082064-9d2clho70h0t579rufsq3n81e3rrldns.apps.googleusercontent.com"
            buttonText="INGRESAR"
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <GoogleLogout
          className='hola'
            clientId="869690082064-9d2clho70h0t579rufsq3n81e3rrldns.apps.googleusercontent.com"
            buttonText={"CERRAR SESIÓN"}
            onLogoutSuccess={LoginCerrar}
          />
          </center>
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
