import React, { useState, useEffect } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import style from './EditProduct.module.css';

export default function EditProduct({ match }){
    let id = match.params.id;
    let name = match.params.name
    const history = useHistory();
    const [input, setInput] = useState({
        name: "",
        brand: "",
        price: "",
        pictures: "",
        category: [],
        stock: "",
        description: "",
    });

    const handleInputChange = (e)=>{
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
    };

    const resetForm = ()=> {
        setInput({
            name: "",
            brand: "",
            price: "",
            pictures: "",
            category: [],
            stock: true,
            description: "",
        })
    };

    // useEffect( () => {
    //     if(id){
    //     fetch(`http://localhost:3001/product/${id}`)
    //     .then(response => response.json())
    //     .then(function(product){
    //     setInput(
    //         product
    //         );
    //     })
    //     .catch(function(err){
    //     swal("Error","Producto no encontrado","error")
    //     });
    // }},[id]);

    const updateProduct = async function(){
        await fetch(`http://localhost:3001/products/${id}`, {
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
        await fetch(`http://localhost:3001/productS/${id}`, {
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
                <input type='text' name='category' onChange={handleInputChange} value={input.category} required autoFocus />
            </div>
            <div>
                <label className={style.labelStock}>Stock</label>
                <input className={style.inputStock} type='number' name='stock' onChange={handleInputChange} value={input.stock} required autoFocus />
            </div>
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
