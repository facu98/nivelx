import React from 'react';
import { productQuantity } from '../../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector, connect} from "react-redux"

export function Count(props) {
    const q = useSelector(state => state.quantity);
    const dispatch = useDispatch();

    let text = document.getElementsByClassName('text');
    let prices = document.getElementsByClassName('prices');

    const handleChange = (e) => {
        if (q <= props.quantity){
            text.textContent = 'Stock disponible'
            prices.textContent = `USD ${q * props.price}`
        }
        if (q === props.quantity) {
            text.textContent = `¡Lo sentimos! solo hay ${props.quantity} ${props.name} en stock`
        }
        dispatch(productQuantity(e.target.value))
    };
    
    return (
        <div className="Card">
            <div>
                <label><b>Cantidad:</b></label>
                <input type="number" id="quantity" name="quantity" min="1" max={props.quantity} value={q} onChange={handleChange}/>
                <span 
                style={q>= 1 ? {display: 'none'} : {color: 'red', marginLeft: '15px'}}>
                    Seleccione la cantidad
                </span>
                <p  className="text" 
                    style={text.textContent === 'Stock disponible' ? {color: 'green'} : {color: 'red'}}>
                    {text.textContent} 
                </p>
                <h3 className="prices">{prices.textContent}</h3>
            </div>
        </div>
    );
};