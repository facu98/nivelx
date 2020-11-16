import React from "react"
import { NavLink } from 'react-router-dom'
import style from "./panel.module.css"


export default function (){

  return (
      <div class = {style.container}>
            <h3>PANEL ADMIN</h3>
        <div class= {style.link}>
            <NavLink to = "/admin/createProduct" className='list-group-item list-group-item-dark list-group-item-action'>CREAR PRODUCTO</NavLink>
        </div>

        <div class= {style.link}>
            <NavLink to = "/admin/createCategory" className='list-group-item list-group-item-dark list-group-item-action'>CREAR CATEGORIA</NavLink>
        </div>

        <div class= {style.link}>
            <NavLink to = "/admin/products/edit" className='list-group-item list-group-item-dark list-group-item-action'>EDITAR O ELIMINAR PRODUCTO</NavLink>
        </div>

        <div class= {style.link}>
            <NavLink to = "/admin/editCategory" className='list-group-item list-group-item-dark list-group-item-action'>EDITAR O ELIMINAR CATEGORIA</NavLink>
        </div>

        <div class= {style.link}>
            <NavLink to = "/admin/users" className='list-group-item list-group-item-dark list-group-item-action'>EDITAR O ELIMINAR USUARIOS</NavLink>
        </div>

        <div class= {style.link}>
            <NavLink to = "/admin/orders" className='list-group-item list-group-item-dark list-group-item-action'>ORDENES</NavLink>
        </div>
      </div>
  );
}
