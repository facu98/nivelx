import React, { useState, useEffect } from 'react';
// import { Grid, Button, TextField variant="outlined" fullwidth } from '@material-ui/core';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import style from './EditProduct.module.css';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { CardHeader, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '200%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(2, 3, 4, 0),
      width: "100%"
    },
    checkbox: {
      display: 'flex-column',
      maxWidth: '400px'
    },
    imageName: {
      width: '60%',
      margin: '5px auto',
      padding: '5px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      background: '#d9e7ff'
    },
    msg: {
      width: '60%',
      margin: '5px auto',
      padding: 'auto',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      justifyContent: 'center',
      borderRadius: '10px',
    },
    root: {
      width: 200,
      margin: '3%'
    },
    media: {
      height: 140,
      objectFit: 'contain',
    },

  }));

export default function EditProduct({ match }){
    let id = match.params.id;
    // let name = match.params.name
    const classes = useStyles();
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
            if([e.target.name] === "color"){
                setInput({
                    ...input,
                    color: e.target.value.split(",")
                })
            } else {
                setInput({
                    ...input,
                    [e.target.name]: e.target.value
                })  
            }
            
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
            color: "",
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
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              EDITAR PRODUCTO
            </Typography>
        <form className={classes.form}>
            <Grid container spacing={2}>
            <Grid item xs={12} className={style.inputContainer}>
                <TextField variant="outlined" label="Nombre del producto" fullwidth type="text" name="name" onChange={handleInputChange} value={input.name} required autoFocus />
            </Grid>
            <Grid item xs={12} className={style.inputContainer}>
                <TextField label="Marca del producto" variant="outlined" fullwidth type='text' name='brand' onChange={handleInputChange} value={input.brand} required autoFocus />
            </Grid>
            <Grid item xs={12} className={style.inputContainer}>
                <TextField variant="outlined" label= "Precio del producto" fullwidth type="number" name="price" onChange={handleInputChange} value={input.price} required autoFocus  />
            </Grid>
            {/*<Grid item xs={12} className={style.inputContainer}>
                <label>Imagen del producto</label>
                <TextField variant="outlined" fullwidth type="file" name="pictures" onChange={handleInputChange} value={input.pictures} required autoFocus />
            </Grid>*/}
            <Grid item xs={12} className={classes.checkbox}>
                {categorias && categorias.map((cat) => {
                  let finder = input.category.find((c) => c === cat.name)
                  var check
                  finder ? (check = true) : (check = false)
                  checked[cat.name] = check

                  return (<Grid item xs={12} label="Categorías">
                    <Checkbox name={cat.name} id={cat.id} value={cat.name} onChange={categoryChange} checked ={checked[cat.name]}/>
                    <label for={cat.id}>{cat.name}</label>
                    </Grid>)
                })}
            </Grid>
            <Grid item xs={12} className={style.inputContainer}>
                <TextField label="Stock" variant="outlined" fullwidth type='number' name='quantity' onChange={handleInputChange} value={input.quantity} required autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Color"
                value={input.color}
                variant="outlined"
                onChange={handleInputChange}
                name='color'
              />
            </Grid>
            <Grid item xs={12}>
              <p>En caso de que el producto tenga mas de un color separarlos con una coma</p>
              <p><b>Ejemplo: </b>Amarrilo,Azul,Rojo</p>
            </Grid>
            <Grid>
          </Grid>
            {/*<Grid>
                <label className={style.labelStock}>Colores: </label>
                {input.color.map((col) => {

                  return col !== null && (<Grid>
                    <TextField variant="outlined" fullwidth  type="checkbox"  name = {col} value={col}  onChange = {colorChange} defaultChecked required autoFocus />
                    <label for={col}>{col}</label>
                    </Grid>)
                })}

            </Grid>

            <Grid item xs={12} className={style.inputContainer}>
                <label>Agregar color</label>
                <textarea name="newColor" onChange={handleInputChange} value={input.newColor} required />

            </Grid>*/}

            <Grid item xs={12} className={style.inputContainer}>
                <TextField fullWidth label="Descripción del producto" variant="outlined" multiline name="description" onChange={handleInputChange} value={input.description} required />

            </Grid>

            <Grid item xs={12} className="buttonContainer">
                <Button className={classes.submit} variant="contained" color="secondary" onClick={resetForm}> Cancelar </Button>
                <Button className={classes.submit} variant="contained" color="secondary" onClick={deletedProd}> Eliminar </Button>
                <Button className={classes.submit} fullwidth variant="contained" color="primary" value="Editar" type="submit" onClick={updateProduct}>Editar</Button>
            </Grid>
        </Grid>
        </form>
        </div>
    </Container>
)
};
