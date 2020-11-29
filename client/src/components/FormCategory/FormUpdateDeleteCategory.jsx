import React, { useState, useEffect } from 'react';
import "./FormUpdateDeleteCategory.css"
import { Grid, Button, TextField, Container, Typography,  CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";

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

export default function EditCategory({ match }){
    // let id = match.params.idCategory;
    let name = match.params.name
    const history = useHistory();
    const classes = useStyles();
    const [input, setInput] = useState({
            name: '',
            description: ''
    });

    const handleInputChange = (e)=>{
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
    };

    const resetForm = ()=> {
        setInput({
            name: '',
            description: ''
        })
    };

    useEffect( () => {
        if(name){
        fetch(`http://localhost:3001/category/single/${name}`)
        .then(response => response.json())
        .then(function(category){
        setInput(
            category
            );
        })
        .catch(function(err){
        swal("Error","categoria no encontrada","error")
        });
    }},[name]);

    const updateCategory = async function(){
        await fetch(`http://localhost:3001/category/${input.id}`, {
            credentials:'include',
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            swal("Success","Categoria modificada","success")
            resetForm();
        }).catch(err => alert(err));
        history.push('/admin/editCategory')
    };

    const deletedCat = async function(){
        swal("Success","categoria eliminada","success");
        await fetch(`http://localhost:3001/category/${input.id}`, {
            credentials:'include',
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })

        .catch(err => alert(err));
        resetForm();
        history.push('/admin/editCategory')
    };

return(
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              EDITAR CATEGORIA
            </Typography>
        <form className={classes.form}>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Nombre"
            value={input.name}
            multiline
            variant="outlined"
            onChange={handleInputChange}
            required
            name='name'
            />
        </Grid>
        <hr/>
        <Grid item xs={12}>
            <TextField
            fullWidth
            label="Descripción"
            value={input.description}
            multiline
            variant="outlined"
            onChange={handleInputChange}
            required
            name='description'
            />
        </Grid>
        <hr/>
        <Grid item xs={12} className="buttonContainer">
        <Button 
        className={classes.submit}
        onClick={resetForm}
        variant='contained'
        color = 'secondary'> 
        Resetear 
        </Button>

        <Button 
        className={classes.submit}
        onClick={deletedCat}
        variant='contained'
        color = 'secondary' >Eliminar Categoria
        </Button>

        <Button 
        className={classes.submit}
        onClick={updateCategory}
        variant='contained'
        color = 'primary'
        fullWidth
        disabled = {!input.name || !input.description}
        >Modificar categoria
        </Button>
        </Grid>
        
        </form>
        </div>
    </Container>
)};
