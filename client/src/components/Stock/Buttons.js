import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import swal from  'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { productQuantity } from '../../actions'
import {useDispatch, useSelector} from "react-redux"
import {addProductCart, productQuantity, addProductGuest, addTotal} from "../../actions"

export default function Buttons(props){

    const q = useSelector(state => state.quantity)
    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const guestCart = useSelector(state => state.guestCart)
    const dispatch = useDispatch()

    const handleCart = () => {
      if(user && user.id){
        let items = cart && cart.filter(e => e.product_id === props.product.id)
        if(items.length === 0){ //
          dispatch(addTotal(props.product.price * q, cart.length))
          dispatch(addProductCart(user.id, props.id, q))
          dispatch(productQuantity(1))
        } else {
          swal("El producto ya se encuentra en el carrito", "","warning")
        }
        
      } else {
        const data = {
          price: props.product.price,
          product_name: props.product.name,
          quantity: q > 0 ? q : 1,
          product_desc: props.product.description,
          product_img: props.product.pictures,
          product_id: props.product.id 
        }
        dispatch(addProductGuest(data, parseInt(q))) //
        dispatch(addTotal(props.product.price * q, guestCart.length)) //
      }
    }
      //subscribe
    return(
        <div>
            <Button
            disabled={q === 0 || q > props.quantity }
            variant="contained" color="primary"
            size="medium"
            style={{ padding: '5px 25px'}}>
            Comprar
            </Button>

            <Button
            disabled={q === 0 || q > props.quantity }
            variant="outlined"
            color="primary"
            size='medium'
            onClick={handleCart}
            style={{ margin: '25px', padding: '5px 25px' }}>
            Agregar al Carrito
            </Button>
        </div>
    )
};
