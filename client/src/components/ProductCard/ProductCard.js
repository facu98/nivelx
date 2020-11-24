import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
// import iphoneImage from '../../testImages/iphone.jpeg'
// import Rating from '../Rating/Rating'
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Tooltip } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import CategoryIcon from '@material-ui/icons/Category';
import {useDispatch, useSelector} from "react-redux"
import { Review } from '../Review/Review';
import { Star } from '../Review/Star';
import {addProductCart, addProductGuest} from "../../actions"
import { FaAutoprefixer } from 'react-icons/fa';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:245,
    maxWidth: 250,
    maxHeight: 450,
    margin: 'auto',
  },
  actionArea: {
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    padding: 10,
  },
  action: {
    marginTop:0,
    marginBottom: 10,
  },
  media: {
    height: 0,
    objectFit: 'contain',
    paddingTop: '100%'
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductCard(props) {
  const cart = useSelector(state => state.cart)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const classes = useStyles();
  const url = useLocation();
  const guest = useSelector(state => state.guest)

  const handleCart = () => {
    if(user && user.id){
      dispatch(addProductCart(user.id, props.productos.id))
    }

    else {
      const data = {price: props.productos.price,
        product_name: props.productos.name,
        quantity: 1,
        product_desc: props.productos.description,
        product_img: props.productos.pictures,
        product_id: props.productos.id
        }

      dispatch(addProductGuest(data))
    }

  }

  const boton = url.pathname === '/admin/products/edit'
    ? (<>
      <Link to={`/admin/products/edit/${props.productos.id}`}>
        <IconButton>
          <Tooltip title='Editar producto'>
            <EditIcon color='primary' />
          </Tooltip>
        </IconButton>
      </Link>


    </>)
    : url.pathname === '/admin/products/edit_category'
      ? (<IconButton>
        <Tooltip title='Editar categoria'>
          <CategoryIcon color='primary' />
        </Tooltip>
      </IconButton>)
      : (<>
        <Tooltip title='Añadir al carrito'>
          <IconButton onClick = {handleCart} aria-label="addToCart">
            <ShoppingCartIcon color='primary' />
          </IconButton>
        </Tooltip>
      </>)

  return (

    <Card className={classes.root, classes.actionArea } variant="outlined">
       <CardHeader/>
      <CardMedia
        className={classes.media}
        image={props.productos.pictures[0]}
        loading = "lazy"
      />
      <CardContent className={classes.content} >
        <Link to={`/products/${props.productos.id}`}>
          <Typography variant='h5' color="textSecondary" component="p">
            {props.productos.name}
          </Typography>
        </Link>
        <Typography variant='p' color='textSecondary'>
          {props.productos.brand}
        </Typography>
        <Typography gutterBottom variant='body1' color='primary' component='p'>
          {`USD ${props.productos.price} `} {boton}
        </Typography>

        <Star />
      </CardContent>
      <CardActions disableSpacing className={classes.action} >
  {boton}
</CardActions>

    </Card>

  );
}
