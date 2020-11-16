import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom'
// IMPORTS DE MATERIAL UI
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {useDispatch, useSelector} from "react-redux"
import {getProductsCart} from "../../actions"


export const Navbar = () => {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    (user.length > 0) && dispatch(getProductsCart(user.id))

  },[])



    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button onClick = {() => {dispatch(getProductsCart(1))}}class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                        <NavLink to="/user/login" className='nav-link' >
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
                                                <Badge badgeContent={cart && cart.length} color="secondary">
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
