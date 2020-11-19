import React, { useEffect } from 'react';
import { productQuantity } from '../../actions'
import {useDispatch, useSelector} from "react-redux"
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stock.css';

export default function Stock(props) {
    let text = document.getElementsByClassName('text');
    let prices = document.getElementsByClassName('prices');

    const q = useSelector(state => state.quantity);
    const url = useLocation();
    const dispatch = useDispatch();

    //Reiniciar contador
  
    // useEffect(() => {
    //     prices.textContent = ''
    //     text.textContent = ''
    //     dispatch(productQuantity(0))
    // }, []);

    //Cantidad

    const handleChange = (e) => {
        if (q <= props.quantity){
            text.textContent = 'Stock disponible'
            prices.textContent = `USD ${q * props.price}`
        } else {
            text.textContent = 'No hay Stock'
        }
        dispatch(productQuantity(e.target.value))
    };
    
    return (
        <div className="Card">
            <div>
                <label><b>Cantidad:</b></label>
                <input type="number" id="quantity" name="quantity" min="0" value={q} onChange={handleChange}/>
                <span 
                style={q >= 1 ? {display: 'none'} : {color: 'red', marginLeft: '15px'}}>
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