import React from 'react';
import './Copyright.css';


export default function () {

    return (
        <div className='Copyright-Container'>
          <div className='Copyright-text'>
            <span>Hecho con 💛 por alumnos del FT06-G10 de Henry .</span>
            <span> Henry © {new Date().getFullYear() }  | Todos los derechos reservados. </span>
          </div>
        </div>
    )
}
