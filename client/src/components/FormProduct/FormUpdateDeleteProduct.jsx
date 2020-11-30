import React, { useState, useEffect } from 'react';
// import { Grid, Button, TextField } from '@material-ui/core';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import style from './EditProduct.module.css';

export default function EditProduct({ match }){
    let id = match.params.id;
    // let name = match.params.name
    const history = useHistory();
    const [categorias, setCategorias] = useState([])
    const [checked, setChecked] = useState({})
    const [input, setInput] = useState({
        name: "",
        brand: "",
        price: "",
        pictures: "",
        category: [],
        quantity: "",
        description: "",
        color: [],
    });

    useEffect(() => {
      fetch(`http://localhost:3001/category`)
        .then(function (response) {
          return response.json()
        })
        .then(function (category) {
          setCategorias(category)
        })
        .catch(function (err) {
          console.log(err)
        })
    }, [])

    const handleInputChange = (e)=>{
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
    };

    const categoryChange = (e) => {

    setChecked({...checked,
    [e.target.name] : !checked})
    const id = e.target.value
    const finder = input.category.find((cat) => cat === id)
    finder ? input.category = input.category.filter((cat) => cat !== id) : input.category.push(id)
    console.log(input.category)
    }

//     const colorChange = (e) => {
//   input.color = input.color.filter((col) => col !== e.target.value)
//   console.log(input.color)
//     }

    const resetForm = ()=> {
        setInput({
            name: "",
            brand: "",
            price: "",
            pictures: "",
            category: [],
            quantity: "",
            description: "",
            color: [],

        })
    };

    useEffect( () => {
        if(id){
        fetch(`http://localhost:3001/products/${id}`)
        .then(response => response.json())
        .then(function(product){
        setInput(product)
        ;})
        .catch(function(err){
        swal("Error","Producto no encontrado","error")
        });
    }},[id]);

    const updateProduct = async function(){

        await fetch(`http://localhost:3001/products/${id}`, {
            credentials:'include',
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            swal("Success","Producto modificado","success")
            //resetForm();
        }).catch(err => alert(err));
        //history.push('/admin/editProduct')
    };

    const deletedProd = async function(){
        swal("Success","Producto eliminado","success");
        await fetch(`http://localhost:3001/products/${id}`, {
            credentials:'include',
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })

        .catch(err => alert(err));
        resetForm();
        history.push('/admin/editProduct')
    };

return(
    <div className={style.formStyle}>
        <h3>Editar producto</h3>
        <hr/>
        <form>
            <div className={style.inputContainer}>
                <label>Nombre del producto</label>
                <input type="text" name="name" onChange={handleInputChange} value={input.name} required autoFocus />
            </div>
            <div className={style.inputContainer}>
                <label>Marca del producto</label>
                <input type='text' name='brand' onChange={handleInputChange} value={input.brand} required autoFocus />
            </div>
            <div className={style.inputContainer}>
                <label>Precio del producto</label>
                <input type="number" name="price" onChange={handleInputChange} value={input.price} required autoFocus  />
            </div>
            {/*<div className={style.inputContainer}>
                <label>Imagen del producto</label>
                <input type="file" name="pictures" onChange={handleInputChange} value={input.pictures} required autoFocus />
            </div>*/}
            <div className={style.inputContainer}>
                <label>Categoría</label>
                {categorias && categorias.map((cat) => {
                  let finder = input.category.find((c) => c === cat.name)
                  var check
                  finder ? (check = true) : (check = false)
                  checked[cat.name] = check

                  return (<div>
                    <input type="checkbox" name={cat.name} id={cat.id} value={cat.name} onChange={categoryChange} checked ={checked[cat.name]}/>
                    <label for={cat.id}>{cat.name}</label>
                    </div>)
                })}
            </div>
            <div>
                <label className={style.labelStock}>Stock</label>
                <input className={style.inputStock} type='number' name='quantity' onChange={handleInputChange} value={input.quantity} required autoFocus />
            </div>

            <div>
          </div>
            {/*<div>
                <label className={style.labelStock}>Colores: </label>
                {input.color.map((col) => {

                  return col !== null && (<div>
                    <input  type="checkbox"  name = {col} value={col}  onChange = {colorChange} defaultChecked required autoFocus />
                    <label for={col}>{col}</label>
                    </div>)
                })}

            </div>

            <div className={style.inputContainer}>
                <label>Agregar color</label>
                <textarea name="newColor" onChange={handleInputChange} value={input.newColor} required />

            </div>*/}

            <div className={style.inputContainer}>
                <label>Descripción del producto</label>
                <textarea name="description" onChange={handleInputChange} value={input.description} required />

            </div>

            <div className="buttonContainer">
                <button onClick={resetForm} className="button"> Cancelar </button>
                <button onClick={deletedProd} className="button"> Eliminar </button>
                <input  type="submit" value="Editar" className="button" onClick={updateProduct}/>
            </div>

        </form>
    </div>
)
};
