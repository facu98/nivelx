import {useDispatch, useSelector} from "react-redux"
import {getOrders, getOrderbyID, getProductsCart, changeStateOrder} from "../../actions"
import React, { useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import {Link, useHistory } from 'react-router-dom'
import MaterialTable from 'material-table'
import AdminCart from './AdminCart'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'




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
  { field: 'id', title: 'Order ID'},
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



var value

const handleChange = (e) => {
  value = e.target.value
}

const changeState = (userID, orderID) => {
    console.log(userID, orderID)
    const data = {state: value, orderId: orderID}
  dispatch(changeStateOrder(userID, data))
}



  return (
    <div>
    {<div style={{ maxWidth: '100%' }}>
      <MaterialTable columns={columns} data={rows} title="Orders"

      detailPanel={[{
        icon: () => <EditIcon/>,
        tooltip:'Cambiar estado',
        render: rowData => {

          return (
        <div style={{
                display: 'flex',
                fontSize: 15,
                textAlign: 'center',
                justifyContent:'center',
                alignItems:'center'
              }}>

      <FormControl component="fieldset">
        <FormLabel component="legend">Cambiar estado de la orden</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange}>
          <FormControlLabel
            value="carrito"
            control={<Radio color="primary" />}
            label="carrito"
            labelPlacement="top"
          />
          <FormControlLabel
            value="creada"
            control={<Radio color="primary" />}
            label="creada"
            labelPlacement="top"
          />
          <FormControlLabel
            value="procesando"
            control={<Radio color="primary" />}
            label="procesando"
            labelPlacement="top"
          />
          <FormControlLabel
          value="cancelada"
           control={<Radio color="primary" />}
           label="cancelada"
           labelPlacement="top"/>

           <FormControlLabel
           value="completa"
            control={<Radio color="primary" />}
            label="completa"
            labelPlacement="top"/>

        </RadioGroup>

      </FormControl>

      <Button onClick={() => {changeState(rowData.userID, rowData.id)}} variant="contained" >Change</Button>
        </div>
      )
    },
  },

  {
       icon:() => <ShoppingCartIcon/>,
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
