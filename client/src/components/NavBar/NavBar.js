import React from 'react';
import { NavLink } from 'react-router-dom'
// IMPORTS DE MATERIAL UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';


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
                            Ingresar
                        </NavLink>
                    </li>
                    <li className="nav-item offset-1 active">
                        <NavLink to="/user/create" className='nav-link' >
                            Registrarse
                        </NavLink>
                    </li>
                    <li className="nav-item offset-1 active">
                        <NavLink to="/admin/panel" className='nav-link' >
                            Administrador
                        </NavLink>
                    </li>

                    <li>
                          <NavLink to='/user/cart'>
                                      <IconButton aria-label="cart">
                                                <Badge badgeContent=4{/*cart.length*/} color="secondary">
                                                    <ShoppingCartIcon style={{ color: 'white' }} />
                                                </Badge>
                                      </IconButton>
                          </NavLink>
                    </li>


                </ul>
                </div>

            </div>
        </nav>
    )
}
