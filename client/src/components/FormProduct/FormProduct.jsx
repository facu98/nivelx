import React, {useState, useEffect} from 'react';
import style from './Product.module.css';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import ImageUploader from 'react-images-upload';
// MATERIAL UI
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
import axios from 'axios'

import swal from 'sweetalert';
import { createProduct } from "../../actions";

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
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

export default function ProductCRUD({ match }){
  const [categorias, setCategorias] = useState([])
  const [check, setCheck] = useState(null);
  const [files, setFiles] = useState(null);
  const classes = useStyles();
    const [input, setInput] = useState({
        name: "",
        brand: "",
        price: "",
        pictures: "",
        category: [],
        stock: "",
        description: "",
        color: ""
    })

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
            [e.target.name]: e.target.value,
        })
    };

    const categoryChange = (e) => {

    const id = e.target.name

    const finder = input.category.find((cat) => cat === id)
    finder ? input.category = input.category.filter((cat) => cat !== id) : input.category.push(id)
    console.log(input.category)
    }

    const resetForm = ()=> {
        setInput({
            name: "",
            brand: "",
            price: "",
            pictures: "",
            category: [],
            stock: "",
            description: "",
        })
    };

    const fileChange = (e) => {
      console.log(e.target.files[0])
      const file = e.target.files[0]
      setFiles(file)
    }

    const uploadFile = () => {
      const data = new FormData()
      data.append('name', files.name)
      data.append('files', files)
      return fetch('http://localhost:3001/upload',
      {credentials:'include',
        method:'POST',
        body:data})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newProduct = {
            name: input.name,
            brand: input.brand,
            price: input.price,
            pictures: ["input.pictures"],
            category: input.category,
            stock: true,
            description: input.description,
            quantity: input.stock,
            color: ["Azul","Amarillo"]
        }

        swal("Genial!", "Se ha creado el producto exitosamente!", "success");

        fetch('http://localhost:3001/products', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then((res)=>{
            if(res.status !== 401){
            resetForm();}
            else alert('No tienes permisos de administrador')
        })
        .catch((err)=>{
             console.log(err)
        })
    }

    const removeFile = (i) => {
        // const newFiles = Array.from(files)
        let prevImages = input.pictures
        prevImages.splice(i, 1)
        setInput({
          ...input,
          name: input.name,
          brand: input.brand,
          description: input.description,
          price: input.price,
          stock: input.stock,
          pictures: prevImages,
          category: input.category
        })
        // newFiles.splice(i, 1)
        // setFiles(newFiles)
      }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
            <h3>Crear Producto</h3>
            <hr/>
            <form className={classes.form} onSubmit={handleSubmit} >
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={input.name}
                required
                fullWidth
                onChange={handleInputChange}
                label="Nombre del producto"
                autoFocus
                name='name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Marca"
                value={input.brand}
                multiline
                variant="outlined"
                onChange={handleInputChange}
                required
                name='brand'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleInputChange}
                value={input.price}
                variant="outlined"
                required
                fullWidth
                label="Precio"
                type='number'
                name='price'
              />
            </Grid>
                {/* <div className={style.inputContainer}>
                    <label>Imagen del producto</label>
                    <input type="file" name="pictures" onChange={handleInputChange} value={input.pictures} required autoFocus />
                </div> */}
                <div style={{ display: 'flex' }}>
            {input.pictures && input.pictures.length > 0 && input.pictures.map((img, i) =>
              <>
                <Card className={classes.root} key={img}>
                  <CardHeader action={
                    <Tooltip title='Eliminar imagen'>
                      <IconButton aria-label="deleteImage" onClick={() => removeFile(i)} >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>} />
                  <CardMedia className={classes.media} image={`http://localhost:3001/images/${img}`} />
                </Card>

              </>
            )}
          </div>

                {/* <div className={style.inputContainer}>
                    <label>Categoría</label>
                    {categorias && categorias.map((cat) => {
                      return (<div>
                        <input type="checkbox" name={cat.name} id={cat.id} value={cat.name} onChange={categoryChange}/>
                        <label for={cat.id}>{cat.name}</label>
                        </div>)
                    })}
                </div> */}
                <Grid item xs={12} className={classes.checkbox}>
                {categorias && categorias.map((cat, i) => (
                <FormGroup row key={i}>
                  <FormControlLabel
                    control={<Checkbox
                      onChange={categoryChange}
                      name={cat.name}
                      value={check}
                    />}
                    label={cat.name}
                  />
                </FormGroup>
              ))}
              </Grid>
                <Grid item xs={12}>
              <TextField
                value={input.stock}
                onChange={handleInputChange}
                variant="outlined"
                required
                fullWidth
                name="stock"
                label="Stock"
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-textarea"
                label="Descripción"
                value={input.description}
                multiline
                variant="outlined"
                onChange={handleInputChange}
                required
                name='description'
              />
            </Grid>

            <Grid item xs={12}>
            <form action="#" method="post" enctype="multipart/form-data">
            <input type="file" id = 'file' accept = '.jpg' name="avatar" onChange={fileChange}/>
            </form>
            <button onClick = {uploadFile}>Upload</button>

            </Grid>


                <div className="buttonContainer">
                    <Button color="secundary" variant="contained" onClick={resetForm} className={classes.submit} > Cancelar </Button>
                    <Button color="primary" variant="contained"  type="submit" value="Guardar" className={classes.submit}>Guardar</Button>
                </div>
                </Grid>
            </form>
            </div>
            <Box mt={5}>

            </Box>
        </Container>
    )
}
