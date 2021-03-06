
//IMPORTAMOS LIBRERIAS DE REACT
import React, {useEffect} from 'react';
import { Route } from "react-router-dom";


// import ProductsCards from './components/ProductCard/ProductCard';
import Carrousel from './components/Carrousel/Carrousel'
import Catalogo from './components/Catalog/Catalog';
import Categorias from './components/Categorias/Categorias';
import FormCategory from './components/FormCategory/FormCategory';
import FormProduct from './components/FormProduct/FormProduct';
import SearchBar from './components/SearchBar/SearchBar';
import EditCategory from './components/FormCategory/FormUpdateDeleteCategory';
import EditProduct from './components/FormProduct/FormUpdateDeleteProduct';
import ProductDetail from "./components/ProductDetail/Product"
import PanelAdmin from "./components/AdminPanel/PanelAdmin"
import Container from '@material-ui/core/Container'
import CreateUser from "./components/CreateUser/CreateUser"
import AdminUsers  from "./components/AdminUsers/AdminUsers"
import EditUser from './components/AdminUsers/EditDeleteUser'
import {Cart} from './components/Cart/index'
import OrdersAdmin from './components/Order/AdminOrder'
import Login from './components/LogIn/LogIn'
import {useDispatch, useSelector} from "react-redux"

// --- con esto se si esta authenticado ---
const isAuthenticated = localStorage.getItem('token');
// ----------------------------------------

function App() {
  const user = useSelector(state => state.user)


  return (
    <div className="App">
          <SearchBar />
          <Route exact path='/' render={() => <Carrousel />} />
          <Container>

              <Route exact path='/' component={Catalogo} />

              <Route exact path='/user/create' component={CreateUser} />

              <Route exact path='/user/login' component={Login} />
              {isAuthenticated &&
              <Route path='/admin/orders' component = {OrdersAdmin} />
              }
              <Route exact path='/user/cart' component={Cart} />

              <Route exact path='/:name' component={Catalogo} />

              {user.isAdmin && isAuthenticated &&
               <Route exact path='/admin/panel' component={PanelAdmin} />
              }

              <Route path='/products/category/:id' component={Catalogo} />

              <Route path = '/products/:id' component = {ProductDetail} />
              {isAuthenticated &&
              <Route exact path='/admin/createCategory'
                render={({ match }) => <FormCategory match={match} />}
              />
              }
              {isAuthenticated &&
              <Route exact path='/admin/editCategory' component={Categorias} />
              }
              {isAuthenticated &&
              <Route exact path='/admin/users' component={AdminUsers} />
              }
              {isAuthenticated &&
              <Route exact path='/admin/users/:id' component={EditUser} />
              }
              {isAuthenticated &&
              <Route exact path='/admin/products/edit' component={Catalogo} />
              }
              {isAuthenticated &&
              <Route exact path='/admin/createProduct' component ={FormProduct} />
              }
              {isAuthenticated &&
              <Route exact path='/admin/products/edit/:id'
                render={({ match }) => (<EditProduct match={match} />)}/>
              }
              {isAuthenticated &&
              <Route exact path='/admin/editCategory/:name'
                render={({ match }) => (
                  <EditCategory match={match} />
                  )}
              />
              }
          </Container>
     </div>


  );

}
export default App;
