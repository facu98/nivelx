import {useDispatch, useSelector} from "react-redux"
import {getOrders, getOrderbyID} from "../../actions"
import React, { useEffect, useState} from 'react'
import { useLocation, useParams } from "react-router-dom";
import { NavLink, useHistory } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import styles from './orders.module.css'


export default function ({match}){
const state = useSelector(state => state.orders)
const dispatch = useDispatch()
const [search, setSearch] = useState("")
const history = useHistory()

var location = useLocation().pathname.split("/")


useEffect(() => {
  if(location[3]){
    dispatch(getOrderbyID(location[3]))
  }
   else dispatch(getOrders())
},[])

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'estado', headerName: 'Estado', width: 130 },
  {field:'userID', headerName: 'User ID', width:100},
  {field: 'fecha', headerName:'Fecha', width:130},
  {field: 'hora', headerName:'Hora', width:130}

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

const handleChange = (e) => {
  setSearch(
    e.target.name = e.target.value
  )

}

const handleSearch = () => {

  history.push(`/admin/orders/${search}`);
  history.go()
}

  return (
    <div>
    <div className = {styles.getOrders} >
    <h1 href ="#" onClick = {() => {dispatch(getOrders())}}>GET ORDERS</h1>
    </div>
    <input value = {search} name = 'search' onChange = {handleChange} aria-label="Search" placeholder ="Filtrar por ID de orden"/>
    <button onClick = {handleSearch} >Buscar</button>
    {<div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10}  />
    </div>}
    </div>
  );
}
