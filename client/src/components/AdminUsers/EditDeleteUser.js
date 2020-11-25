import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {editUser, deleteUser, promoteUser} from "../../actions"
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
// import swal from 'sweetalert';
import {  useHistory } from 'react-router-dom'




const useStyles = makeStyles((theme) => ({
    paper: {
      marginLeft: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
      marginTop:'10px'

    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {

      width: '800px', // Fix IE 11 issue.
      marginTop: theme.spacing(3),

    },
    submit: {
      width: '80%',
      margin: theme.spacing(2, 0, 2),
      marginLeft:'80px'

    },
    container:{
      display:'flex',
      justifyContent:'center'
    },

    title:{
      marginLeft:'100px'
    }
  }));

	export default function FormUser(props){
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()


    const classes = useStyles();
    const [validate, setValidate] = useState({
      mail:""
    })

    const [error, setError] = useState({
      name: false,
      lastname: false,
      email:false,
      phone:false,
      directionOne:false
    })

    const [input, setInput] = useState({
      name: '',
      lastname: '',
      email:'',
      phone:'',
      directionOne:'',
      directionTwo:''
    });


    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


        setError({...error,
        [e.target.name] : false})



    };


    const phoneChange = (e) => {
      const onlyNums = e.target.value.replace(/[^0-9]/g, '');
      setInput({
        ...input,
        phone : onlyNums
      })

      onlyNums.length > 0 && (
      setError({...error,
      [e.target.name] : false})
    )
    }

    const nameChange = (e) => {
      console.log(input.directionTwo)
      console.log(input.lastname)
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, '');


        setInput({
          ...input,
          [e.target.name] : onlyLetters
        })

        onlyLetters.length > 0 && (
        setError({...error,
        [e.target.name] : false})
      )

    }

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
          name: '',
          lastname: '',
          email:'',
          phone:'',
          directionOne:'',
          directionTwo:''
        })
    };
    const handleSubmit = (e)=>{
        e.preventDefault();

          props.user && dispatch(editUser(props.user.id, input))

          resetForm()

      }



      useEffect(() => {
        if(props.user){
        !props.user.directionTwo && (props.user.directionTwo = "")
        setInput(props && props.user)
      }

      },[props])

      const handleDelete = () => {
        if(window.confirm(`Seguro que deseas eliminar el user ${props.user.id}?`))
        props.user && dispatch(deleteUser(props.user.id))

      }

      const handlePromote = () => {
        props.user && dispatch(promoteUser(props.user.id))
      }


    return(

    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Typography className = {classes.title} component="h1" variant="h4">
        EDIT USER {props.user && props.user.id}
    </Typography>
    <div className={classes.paper}>

    <form className={classes.form} noValidate >
        <Grid className={classes.container} container spacing={5}>
        <Grid item xs={5}>
            <TextField
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            fullWidth
            error={error.name}
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
            error={error.lastname}
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
            label="Telefono"
            name="phone"
            error={error.phone}
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
            error={error.directionOne}
            variant="outlined"
            required
            value={input.directionOne}
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
            value={input.directionTwo}
            onChange={handleInputChange}
            //   value={input.description}
            />
        </Grid>

        </Grid>
        <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                EDITAR
            </Button>

            <Button
                    onClick={handlePromote}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    PROMOTE / DEGRADE
                </Button>


                    <Button
                            onClick={handleDelete}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            ELIMINAR
                        </Button>
    </form>
    </div>
    <Box mt={5}>
    </Box>
    </Container>
    )
}
