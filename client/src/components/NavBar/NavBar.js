import React, {useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom'
// IMPORTS DE MATERIAL UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {useDispatch, useSelector} from "react-redux"
import {getProductsCart, logOut} from "../../actions"
import UserLoggedComponent from "../UserLogged/UserLoggedComponent"


export const Navbar = () => {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  // --- agregue para proteger rutas ---
  const isAuthenticated = localStorage.getItem('token');
  // -----------------------------------
  useEffect(() => {
    user && dispatch(getProductsCart(user.id))

  },[])

  const handlelogOut = () => {
    if(window.confirm(`Seguro que deseas cerrar sesión?`)){
      dispatch(logOut())
    }
  }



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

                    {user.id ? null : <li className="nav-item offset-1 active">
                        <NavLink to="/user/create" className='nav-link' >
                            Registrarse
                        </NavLink>
                    </li>}

                    {user.isAdmin ? <li className="nav-item offset-1 active">
                      <NavLink to="/admin/panel" className='nav-link' >
                            Administrador
                        </NavLink>
                    </li> : null}

                    {<li className="nav-item offset-1 active">
                        {user.id ? <NavLink onClick = {handlelogOut} to = '#' className='nav-link' >
                            Cerrar sesión
                        </NavLink> :
                        <NavLink to="/user/login"  className='nav-link' >
                            Ingresar
                        </NavLink> }
                    </li>}
                    <li className="nav-item offset-1 active">
                        <NavLink to="/user/create" className='nav-link' >
                            Registrarse
                        </NavLink>
                    </li>
                    {isAuthenticated && user.isAdmin &&
                    <li className="nav-item offset-1 active">
                        <NavLink to="/admin/panel" className='nav-link' >
                            Administrador
                        </NavLink>
                    </li>
                    }
                    <li>
                          <NavLink to='/user/cart'>
                                      <IconButton aria-label="cart">

                                                <Badge badgeContent={cart && cart.length} color="secondary">
                                                    <ShoppingCartIcon style={{ color: 'white' }} />
                                                </Badge>
                                      </IconButton>
                          </NavLink>
                    </li>

                    {user.id ? <li>

                        <UserLoggedComponent /> 
                    </li> : null }  


                </ul>
                </div>

            </div>
        </nav>
    )
}
