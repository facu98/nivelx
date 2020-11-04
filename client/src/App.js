import React from 'react';

import './App.css';
import SearchBar from './components/SearchBar';
import ProductsCards from './components/ProductCard/ProductCard';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Catalogo from './components/Catalog/Catalog';
import FormCategory from './components/FormCategory/FormCategory';
import Categorias from './components/Categorias/Categorias';


function App() {

  return (
          <div className="App">
          
          <SearchBar/>

          <Switch>

                <Route exact path='/admin/editCategory' component={Categorias}/>

                <Route exact path='/admin/products/edit' component={Catalogo} />

         <Switch>
  

    </div>
  );


}

export default App;
