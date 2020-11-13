import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../actions"
import React, { useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import EditDeleteUser from './EditDeleteUser'
import styles from './adminstyle.module.css'


export default function (){
const state = useSelector(state => state.users)
const dispatch = useDispatch()
var [show,setShow] = useState(false)
const [user, setUser] = useState({})
useEffect(() => {
  dispatch(getUsers())
}, [])

const handleClick = (data) => {
  setShow(true)
  setUser(data)}



  return(

    <div className={styles.container}>
<div >
    <h1 class>GET USERS</h1>

    <ul>
    {

    state && state.map((user) => {
      return <li><a href="#"onClick = {() => {handleClick(user)}}>ID {`${user.id}: ${user.email}`}</a></li>
    })}
</ul>
</div>
  <div>{show ? <EditDeleteUser user={user}/> : null}</div>
    </div>

  )
}
