import React  from 'react';
import { useFormik } from 'formik';
import './SearchBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, useHistory } from 'react-router-dom'
import { Navbar } from '../NavBar/NavBar';



const SearchBar = () => {


    let history = useHistory();
    const formik = useFormik({
        initialValues : {
            query: "",
        },
        onSubmit : (values, {resetForm}) => {
            history.push(`search?name=${values.query}`);
            resetForm()
        },
    });

    return (

        <div >
            <div className="container">
                <div  className="row justify-content-center justify-content-md-start m-3">
                <div className="col-md-4 text-center" >
                    <NavLink to="/" className='nav-link'>
                     <img src={"http://localhost:3000/assets/img/banner.png"} height ="100px" width="400px" alt="Logo_store" />
                    </NavLink>
                </div>
                <div className="col-md-8 m-auto" >
                    <form onSubmit={formik.handleSubmit} className="form-inline my-2 my-lg-0 justify-content-center">
                        <input  value = {formik.values.query} onChange={formik.handleChange} className="form-control mr-sm-2 input-large" type="text" name="query" placeholder="Busca tu producto!" aria-label="Search" />
                        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit"><SearchIcon /></button>
                    </form>
                </div>
                </div>
            </div>
            <Navbar />
        </div>



    )
}

export default SearchBar;
