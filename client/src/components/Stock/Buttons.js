import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { productQuantity } from '../../actions'
import {useDispatch, useSelector} from "react-redux"
import {addProductCart, productQuantity} from "../../actions"

export default function Buttons(props){

    const q = useSelector(state => state.quantity)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleCart = () => {
        dispatch(addProductCart(user.id, props.id))
        //dispatch(productQuantity(q))
        console.log(q)
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
