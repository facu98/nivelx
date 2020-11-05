import React from 'react';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Rating from '../Rating/Rating'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Tooltip } from '@material-ui/core';
import { useLocation, Link, useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import CategoryIcon from '@material-ui/icons/Category';
import DeleteDialog from '../ConfirmationDialog/DeleteDialog'
import { useDispatch, useSelector } from "react-redux";
import { addProductCart, addProductToGuestCart } from "../../actions";
//import '../../Cart_boton.css';

// IDEA:

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
    maxHeight: 450
  },
  media: {
    height: 0,
    objectFit: 'contain',
    paddingTop: '100%'
  },
  avatar: {
    backgroundColor: red[500],
  },
  buttons: {
    display: 'flex',
  }
}));


export default function ProductCard(props) {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userDetails)
  const logged = useSelector(state => state.userLogged)
  const classes = useStyles();
  const url = useLocation();
  const history = useHistory()
  const [review, setReview] = useState()

  if (review) {
    console.log(review)
  }

  useEffect(() => {
    if (!!props.productos.id) {
      fetch(`http://localhost:3001/products/${props.productos.id}/productreview`)
        .then(data => data.json())
        .then(res => setReview(res))
        .catch(err => console.log(err))
    }

  }, [])
  let totalScore = 0;
  var puntaje = 0;
  review && review.map(rev => totalScore = (totalScore + rev.score))
  let score = review && (totalScore / review.length)
  if (isNaN(score)){
    puntaje = " ";
  }
  else {
    puntaje = score;
  }

  const addtoCart = (e) => {

    e.preventDefault()
    if (logged && props.productos) {
      dispatch(addProductCart(userId.id, props.productos.id, props.productos.price))
    } else if (!logged && props.productos) {
      dispatch(addProductToGuestCart(props.productos))
    }
    //   else {
    //     history.push('/user/login')
    //   }
  }

  const boton = url.pathname === '/admin/products/edit'
    ? (<div className={classes.buttons}>
      <Link to={`/admin/editproduct/${props.productos.id}`}>
        <IconButton>
          <Tooltip title='Editar producto'>
            <EditIcon color='primary' />
          </Tooltip>
        </IconButton>
      </Link>

      <DeleteDialog props={props} />

    </div>)
    : props.productos.stock === 0 ?

      <span>No disponible</span>

      : <div className='cart_boton'>
        <Tooltip title='Añadir al carrito'>
          <IconButton aria-label="addToCart" onClick={addtoCart}>
            <ShoppingCartIcon color='primary' />
          </IconButton>
        </Tooltip>
      </div>

  return (
    <>
      {
        props.productos &&
        <Card className={classes.root}>
          <Link to={`/products/${props.productos.id}`}>
            <CardHeader

            />
            <CardMedia
              className={classes.media}
              image={`http://localhost:3001/images/${props.productos.image[0]}`}
            />
            <hr />
          </Link>
              {boton}
            <CardContent>
              <Rating review={puntaje}/>

              <Typography variant='body2' color="textSecondary" component="p">
                {props.productos.name}
              </Typography>
              <Typography gutterBottom variant='h6' color='primary' component='p'>
                $ {props.productos.price.toFixed(2)}
              </Typography>

            </CardContent>
          {/* <CardActions>
            {boton}
          </CardActions> */}
        </Card>
      }
    </>
  );
}
