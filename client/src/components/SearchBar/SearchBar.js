import React  from 'react';
import { useFormik } from 'formik';
import './SearchBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, useHistory } from 'react-router-dom'



const SearchBar = () => {


    let history = useHistory();
    const formik = useFormik({
        initialValues : {
            query: "",
        },
        onSubmit : (values) => {
            history.push(`search?name=${values.query}`);
        },
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className={"container"}>
                <NavLink to='/' className="navbar-brand">
                    <h1>Nivel X</h1>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/" className='nav-link' >
                                Productos
                        </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/products/" className='nav-link' >
                                Juegos
                        </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/products/" className='nav-link' >
                                Login
                        </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/admin/panel" className='nav-link' >
                                Admin
                            </NavLink>
                        </li>


                    </ul>
                    <form onSubmit={formik.handleSubmit} className="form-inline my-2 my-lg-0">
                        <input  onChange={formik.handleChange} className="form-control mr-sm-2 input-large" type="text" name="query" placeholder="Busca tu producto!" aria-label="Search" />
                        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchIcon /></button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

export default SearchBar;
