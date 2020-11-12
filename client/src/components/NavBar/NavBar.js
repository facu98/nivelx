import React from 'react';
import { NavLink } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='container'>   
                <ul className="navbar-nav m-auto align-items-center">
                    <li className="nav-item active">
                        <NavLink to="/" className='nav-link' >
                            Productos
                        </NavLink>
                    </li>
                    <li className="nav-item offset-1 active">
                        <NavLink to="/products/" className='nav-link' >
                            Juegos
                        </NavLink>
                    </li>
                    <li className="nav-item offset-1 active">
                        <NavLink to="/products/" className='nav-link' >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item offset-1 active">
                        <NavLink to="/admin/panel" className='nav-link' >
                            Administrador
                        </NavLink>
                    </li>
                </ul>
                </div>
                
            </div>
        </nav>
    )
}