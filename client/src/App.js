
//IMPORTAMOS LIBRERIAS DE REACT
import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";


import ProductsCards from './components/ProductCard/ProductCard';
import Catalogo from './components/Catalog/Catalog';
import Categorias from './components/Categorias/Categorias';
import FormCategory from './components/FormCategory/FormCategory';
import FormProduct from './components/FormProduct/FormProduct';
import SearchBar from './components/SearchBar/SearchBar';
import EditCategory from './components/FormCategory/FormUpdateDeleteCategory';
import EditProduct from './components/FormProduct/FormUpdateDeleteProduct';
import ProductDetail from "./components/ProductDetail/Product"

import Container from '@material-ui/core/Container'

function App() {

  return (
    <div className="App">
          <SearchBar />
          <Container>
              <Route exact path='/' component={Catalogo} />

              <Route exact path='/:name' component={Catalogo} />

              <Route path='/category/:idCategory'
                render={({ match }) => (
                  <FormCategory match={match} />
                  )} />

              <Route path='/products/category/:id' component={Catalogo} />

              <Route path = '/products/:id' component = {ProductDetail} />

              <Route exact path='/admin/createCategory'
                render={({ match }) => <FormCategory match={match} />}
              />
              <Route exact path='/admin/editCategory' component={Categorias} />
              <Route exact path='/admin/products/edit' component={Catalogo} />

              <Route exact path='/admin/editCategory/:name'
                render={({ match }) => (
                  <EditCategory match={match} />
                  )}
              />
          </Container>
     </div>


  );

}
export default App;
