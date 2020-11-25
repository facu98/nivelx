import {useDispatch, useSelector} from "react-redux"
import {getUsers} from "../../actions"
import React, { useEffect, useState} from 'react'
// import { NavLink } from 'react-router-dom'
import EditDeleteUser from './EditDeleteUser'
import styles from './adminstyle.module.css'


export default function (){
const state = useSelector(state => state.users)

// const [users, setUsers] = useState(state)
const dispatch = useDispatch()
var [show,setShow] = useState(false)
const [user, setUser] = useState({})
const [input, setInput] = useState({
  search:''
})
const [find, setFind] = useState(false)

useEffect(() => {
  dispatch(getUsers())
},[])

const handleClick = (data) => {
  setShow(true)
  setUser(data)}

const handleSearch = (e) => {
var search = input.search
var finder = state.filter((user) => {
var completeName = `${user.name} ${user.lastname}`
return user.id == search || user.name.toLowerCase() === search.toLowerCase()
|| user.email.toLowerCase() === search.toLowerCase() ||
user.lastname.toLowerCase() === search.toLowerCase() ||
completeName.toLowerCase().trim() === search.toLowerCase()})

if(finder){
  setFind(finder)
}

setInput({...input, search:''})
}

const handleChange = (e) => {

  setInput({
    ...input,
    [e.target.name] : e.target.value
  })

}

const renderForm = () => {
  var asd = state.find((us) => us.id === user.id)
  return(
  <EditDeleteUser user={asd}/> )
}


  return(

    <div className={styles.container}>
<div>
    <div className = {styles.getUsers}>
    <h1 href ="#" onClick={() => {setFind(false)}}>GET USERS</h1>
    </div>
    <input value = {input.search} name = 'search' onChange = {handleChange} aria-label="Search" placeholder ="Introduce datos del user.."/>
    <button onClick = {handleSearch} >Buscar</button>
    <ul>
    {find ? (find.map((user) => {
      return <li><a href="#"onClick = {() => {handleClick(user)}}>ID {`${user.id}: ${user.email}`}</a></li>
    })) :
    (state && state.map((user) => {
      return <li><a href="#"onClick = {() => {handleClick(user)}}>ID {`${user.id}: ${user.email}`}</a></li>
    }))
  }

</ul>
</div>
  <div>{
    show ? renderForm() : null}</div>
    </div>

  )
}
