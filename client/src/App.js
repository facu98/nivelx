
//IMPORTAMOS LIBRERIAS DE REACT
import React from 'react';
import { useSelector} from "react-redux"
import { Route }                  from "react-router-dom";


// IMPORTAMOS LOS COMPONENTES DE REACT
import AdminUsers     from  './components/AdminUsers/AdminUsers';
import Copyright      from  './components/Copyright/Copyright';
import Catalogo       from  './components/Catalog/Catalog';
import {Cart}         from  './components/Cart/index';
import Carrousel      from  './components/Carrousel/Carrousel';
import Categorias     from  './components/Categorias/Categorias';
import FormCategory   from  './components/FormCategory/FormCategory';
import FormProduct    from  './components/FormProduct/FormProduct';
import EditCategory   from  './components/FormCategory/FormUpdateDeleteCategory';
import EditProduct    from  './components/FormProduct/FormUpdateDeleteProduct';
import ProductDetail  from  './components/ProductDetail/Product';
import PanelAdmin     from  './components/AdminPanel/PanelAdmin';
import CreateUser     from  './components/CreateUser/CreateUser';
import EditUser       from  './components/AdminUsers/EditDeleteUser';
import OrdersAdmin    from  './components/Order/AdminOrder';
import Login          from  './components/LogIn/LogIn';
import SearchBar      from  './components/SearchBar/SearchBar';
import ResetPassword  from  './components/ResetPassword/ResetPassword';
import Checkout       from  './components/Checkout/checkout';
import Purchases      from  './components/Purchases/Purchases';
import ReviewButton   from  './components/Review/ReviewButton';
import order          from  './components/Order/Order';
import Container      from  '@material-ui/core/Container'
// --- con esto se si esta authenticado ---
// const isAuthenticated = localStorage.getItem('token');
//
// console.log('asd', isAuthenticated)
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


              <Route exact path='/user/cart' component={Cart} />

              <Route exact path='/user/purchases' component={Purchases} />

              <Route exact path='/user/review/' component={ReviewButton} />


              <Route exact path='/:name' component={Catalogo} />

              <Route exact path='/user/reset_password' component={ResetPassword} />


              <Route path = '/products/category/:id' component={Catalogo} />

              <Route path = '/user/:id' component = {Checkout}/>

              <Route path = '/orders/:id' component = {order} />



              <Route path = '/products/:id' component = {ProductDetail} />

              {user.isAdmin &&
                <Route exact path='/admin/panel' component={PanelAdmin} />
              }

              {user.isAdmin &&
              <Route exact path='/admin/createCategory'
                render={({ match }) => <FormCategory match={match} />}
              />
              }


              {user.isAdmin &&
              <Route exact path='/admin/editCategory' component={Categorias} />
              }


              {user.isAdmin &&
              <Route exact path='/admin/users' component={AdminUsers} />
              }


              {user.isAdmin &&
              <Route exact path='/admin/users/:id' component={EditUser} />
              }

              {user.isAdmin &&

                <Route exact path='/admin/products/edit' component={Catalogo} />
              }



             <Route exact path='/admin/createProduct' component ={FormProduct} />


              {user.isAdmin &&

                <Route exact path='/admin/products/edit/:id'
                render={({ match }) => (<EditProduct match={match} />)}/>
              }

              {user.isAdmin &&
                <Route exact path='/admin/editCategory/:name'
                render={({ match }) => (
                  <EditCategory match={match} />
                )}/>

              }


              {user.isAdmin &&

                <Route path='/admin/orders' component = {OrdersAdmin} />
              }


          </Container>

      <Route component={Copyright} />

     </div>


  );

}
export default App;
