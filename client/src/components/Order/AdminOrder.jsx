import {useDispatch, useSelector} from "react-redux"
import {getOrders, getOrderbyID, getProductsCart, changeStateOrder} from "../../actions"
import React, { useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import {Link, useHistory } from 'react-router-dom'
import MaterialTable from 'material-table'
import AdminCart from './AdminCart'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';




export default function ({match}){
const state = useSelector(state => state.orders)
const dispatch = useDispatch()
const [search, setSearch] = useState("")
const history = useHistory()
//const cart = useSelector(state => state.cart)
var location = useLocation().pathname.split("/")


useEffect(() => {
dispatch(getOrders())
},[])

const columns = [
  { field: 'id', title: 'ID'},
  { field: 'estado', title: 'Estado'},
  {field:'userID', title: 'User ID'},
  {field: 'fecha', title:'Fecha'},
  {field: 'hora', title:'Hora'}

];

var rows = state && state.map((order) => {

  return {
    id: order.id,
    estado:order.state,
    userID: order.userId,
    fecha: order.createdAt.split("T")[0],
    hora: order.createdAt.split("T")[1].slice(0,-5)
  }
})


var check

const checkChange = (e) => {
  const state = e.target.value
  check = state
}

const changeState = (userID, orderID) => {
  const data = {state: check, orderId: orderID}
dispatch(changeStateOrder(userID, data))
}



  return (
    <div>
    {<div style={{ maxWidth: '100%' }}>
      <MaterialTable columns={columns} data={rows} title="Orders"
      detailPanel={[{
        icon: 'favorite_border',
        openIcon: 'favorite',
        tooltip:'Cambiar estado',
        render: rowData => {

          return (
        <div style={{
                fontSize: 15,
                textAlign: 'center',
              }}>
        <input type="radio" name='check' id='carrito' value='carrito' onChange={checkChange}/>
        <label for='carrito'>carrito</label>
        <input type="radio" name='check' id='creada' value='creada' onChange={checkChange}/>
        <label for='creada'>creada</label>
        <input type="radio" name='check' id='procesando' value='procesando' onChange={checkChange}/>
        <label for='procesando'>procesando</label>
        <input type="radio" name='check' id='cancelada' value='cancelada' onChange={checkChange}/>
        <label for='cancelada'>cancelada</label>
        <input type="radio" name='check' id='completa' value='completa' onChange={checkChange}/>
        <label for='completa'>completa</label>
        <button onClick={() => {changeState(rowData.userID, rowData.id)}}>Change</button>
        </div>
      )
    },
  },

  {
       icon: 'account_circle',
       tooltip: 'Editar carrito',
       render: rowData => {
         return (
           <div style={{
                   fontSize: 15,
                   textAlign: 'center',
                 }}>
             {rowData.estado === 'carrito' ? <AdminCart id={rowData.userID}/> : <p>Solo se pueden editar productos de ordenes en estado 'carrito'</p>}
           </div>
         )
       },
     },
]}

      />
    </div>}
    </div>
  );
}
