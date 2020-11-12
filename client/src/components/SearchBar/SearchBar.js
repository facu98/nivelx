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
        onSubmit : (values) => {
            history.push(`search?name=${values.query}`);
            history.go()
        },
    });

    return (

        <div >
            <div className="container">
                <div  className="row justify-content-center justify-content-md-start m-3">
                <div className="col-md-4 text-center" >
                    <NavLink to="/" className='nav-link'>
                    {/* <img src="https://www.canva.com/design/DAEMshrihhw/Y4Sh9WKSEbRiBDliw88EVA/view?utm_content=DAEMshrihhw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" alt="Logo_store" /> */}
                    <h1>NIVEL X</h1>
                    </NavLink>
                </div>
                <div className="col-md-8 m-auto" >
                    <form onSubmit={formik.handleSubmit} className="form-inline my-2 my-lg-0 justify-content-center">
                        <input  onChange={formik.handleChange} className="form-control mr-sm-2 input-large" type="text" name="query" placeholder="Busca tu producto!" aria-label="Search" />
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
