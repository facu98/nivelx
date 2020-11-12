import React, {useState,useEffect} from 'react';
import "./FormStyle.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../UploadImageButton/styleUploadButton.css'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Input } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import InputAdornment from '@material-ui/core/InputAdornment';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center'

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
      margin: theme.spacing(3, 0, 2),
    },
    container:{
      display:'flex',
      justifyContent:'center'
    }
  }));

	export default function FormUser({ match }){
    const classes = useStyles();
    const [validate, setValidate] = useState({
      mail:"",
      password:""
    })
    const [input, setInput] = useState({
      name: '',
      lastname: '',
      email:'',
      phone:'',
      directionOne:'',
      directionTwo:'',
      password:'',
      passwordrepeat:'',
      status:'user'
    });

    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


    };


    const phoneChange = (e) => {
      const onlyNums = e.target.value.replace(/[^0-9]/g, '');
      setInput({
        ...input,
        phone : onlyNums
      })
    }

    const nameChange = (e) => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, '');
        setInput({
          ...input,
          [e.target.name] : onlyLetters
        })
    }

    const emailChange = (e) =>  {
      var validation = /.+@.+\.[A-Za-z]+$/.test(e.target.value)

      setInput({
        ...input,
        [e.target.name] : e.target.value
      })

      validation ? setValidate({...validate,
      mail:""}) : setValidate({...validate,
      mail:"Mail invalido"})
    }

    const validatePassword = (e) => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
      if(e.target.value !== input.password){
        setValidate({
          ...validate,
          password:"Las contraseñas no coinciden"
        })
      }
      else{
        setValidate({
          ...validate,
          password:""
        })
      }
    }



    const resetForm = ()=> {
        setInput({
          name: '',
          lastname: '',
          email:'',
          phone:'',
          directionOne:'',
          directionTwo:'',
          password:'',
          passwordrepeat:''
        })
    };
    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch('http://localhost:3001/users',{
          method: 'POST',
          body: JSON.stringify(input),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then((res)=>{

            swal("GENIAL!", "Se ha creado el usuario exitosamente","success");
            resetForm();
        })
        .catch((err)=>{
             swal("ERROR")
        })
      }

    return(

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Typography component="h1" variant="h2">
        Crear usuario
    </Typography>
    <form className={classes.form} noValidate onSubmit={handleSubmit} >
        <Grid className={classes.container} container spacing={5}>
        <Grid item xs={5}>
            <TextField
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            fullWidth
            onChange={nameChange}
              value={input.name}
            // id="firstName"
            label="Nombre"
            autoFocus
            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Apellido"
            name="lastname"
            variant="outlined"
            required
            onChange={nameChange}
               value={input.lastname}
            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            type="email"
            label="Email"
            name="email"
            variant="outlined"
            required
            helperText = {validate.mail}
            onChange={emailChange}
            value={input.email}

            />
        </Grid>



        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Telefono"
            name="phone"
            variant="outlined"
            required
            onChange={phoneChange}
               value={input.phone}
            />
        </Grid>



        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Dirección"
            name="directionOne"
            variant="outlined"
            required
            onChange={handleInputChange}
            //   value={input.description}
            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Segunda dirección (opcional)"
            name="directionTwo"
            variant="outlined"
            onChange={handleInputChange}
            //   value={input.description}
            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Contraseña"
            name="password"
            type="password"
            variant="outlined"
            required
            onChange={handleInputChange}
            //   value={input.description}
            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Vuelve a introducir la contraseña"
            name="passwordrepeat"
            variant="outlined"
            type="password"
            required
            helperText={validate.password}
            onChange={validatePassword}
            value={input.passwordrepeat}
            />
        </Grid>
        </Grid>
        <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Crear
            </Button>
    </form>
    </div>
    <Box mt={5}>
    </Box>
    </Container>
    )
}
