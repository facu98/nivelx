import React from 'react';
import { Link } from 'react-router-dom'
// IMPORTS DE MATERIAL UI
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch, useSelector} from "react-redux"
import { logOut} from "../../actions"


export default function UserLogged() {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    // const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOutAndClose = () => {
        handleClose();
        if(window.confirm(`Seguro que deseas cerrar sesión?`)){
            dispatch(logOut())
        };
    };
  
    return (
      <div>
        <Button color='secondary' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          { user.name }
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/user/purchases" >
            <MenuItem onClick={handleClose}>Mis compras</MenuItem>
          </Link>
          {/* <MenuItem onClick={handleClose}></MenuItem> */}
          <MenuItem onClick={logOutAndClose}>Salir</MenuItem>
        </Menu>
      </div>
    );
  }
