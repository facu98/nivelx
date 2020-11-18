import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {loginUser} from "../../actions"
import "./FormStyle.css"
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../UploadImageButton/styleUploadButton.css'
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import { Input } from '@material-ui/core';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import InputAdornment from '@material-ui/core/InputAdornment';
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

      width: '150%', // Fix IE 11 issue.
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
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const classes = useStyles();

    const [validate, setValidate] = useState({
      mail:""
    })


    const [error, setError] = useState({
      email:false,

      password:false,

    })

    const [input, setInput] = useState({

      email:'',

      password:'',

    });

    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


        setError({...error,
        [e.target.name] : false})



    };



    const emailChange = (e) =>  {
      var validation = /.+@.+\.[A-Za-z]+$/.test(e.target.value)

      setInput({
        ...input,
        [e.target.name] : e.target.value
      })

      if(validation){
        setValidate({...validate,
        mail:""})

        setError({...error,
        [e.target.name] : false})
      }
      else{
        setValidate({...validate,
        mail:"Mail invalido"})

        setError({...error,
        [e.target.name] : true})
      }


    }




    const resetForm = ()=> {
        setInput({

          email:'',

          password:'',

        })
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
      var err = false
        for( let [key , value] of Object.entries(input)){

          if(!value){

          error[key] = true
          err = true
          }
          else {
            err = false

          }

        }

        setError({...error})

        if(!err){
          dispatch(loginUser(input))
          resetForm()
          swal("Bienvenido", (input.email),"success");
        }
        else{
          }
      }

    return(

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <Typography component="h1" variant="h2">
        Ingresar
    </Typography>
    <form className={classes.form} noValidate onSubmit={handleSubmit} >
        <Grid className={classes.container} container spacing={5}>



        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            type="email"
            label="Email"
            name="email"
            variant="outlined"
            required
            error={error.email}
            helperText = {validate.mail}
            onChange={emailChange}
            value={input.email}

            />
        </Grid>


        <Grid item xs={5}>
            <TextField
            fullWidth
            id="outlined-textarea"
            label="Contraseña"
            name="password"
            type="password"
            error={error.password}
            variant="outlined"
            required
            value={input.password}
            onChange={handleInputChange}
            //   value={input.description}
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
                Ingresar
            </Button>
    </form>
    </div>
    <Box mt={5}>
    </Box>
    </Container>
    )
}
