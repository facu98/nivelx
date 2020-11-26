import React from 'react';
import './Copyright.css';


export default function () {

    return (
        <div className='Copyright-Container'>
          <div className='Copyright-text'>
            <span>Hecho con 💛 por alumnos de Henry FT06-G10.</span>
            <span> Henry © {new Date().getFullYear() }  | Todos los derechos reservados. </span>
          </div>
        </div>
    )
}
