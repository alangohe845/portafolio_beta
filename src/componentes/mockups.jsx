import React from 'react';
import './mockups.css';
import  foto  from '../imgs/logo.png';
function Mockups() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={ foto } alt='hola' />
      </div>
      <div className="card-content">
        <h2>Foto 1</h2>
        <p>Mockups</p>
      </div>
    </div>
  );
}

export default Mockups;