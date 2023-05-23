import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2';

function LoginCerrar() {
    
    const LoginCerrar=()=>{
        console.log("SESIÓN TERMINADA IBARRA ORTEGA");         
        Swal.fire({
            icon: 'success',
            title: 'SESION TERMINADA',
            text: 'SESION TERMINADA',
            footer: '<a href="www.utd.edu.mx">Why do I have this issue?</a>'
          })
      }  
    return (        
            <GoogleLogout
                clientId="869690082064-9d2clho70h0t579rufsq3n81e3rrldns.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={LoginCerrar}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default LoginCerrar;