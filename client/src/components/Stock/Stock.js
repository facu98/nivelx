import React, { useEffect } from 'react';
import { productQuantity } from '../../actions'
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stock.css';

export default function Stock(props) {
    let text = document.getElementsByClassName('text');
    let prices = document.getElementsByClassName('prices');

    const q = useSelector(state => state.quantity);
    // const url = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productQuantity(1))
    }, [])

    const handleChange = (e) => {
        dispatch(productQuantity(e.target.value))
    }
    
    return (
        <div className="Card" >
            <div>
                <label>
                    <b>Cantidad:</b>
                </label>
                <input 
                    type="number" 
                    id="quantity"
                    min="1"
                    onKeyDown={false}
                    value={q} 
                    onChange={handleChange}
                />
                
                {
                q !== 0 && !isNaN(q)
				    ?((q <= props.quantity)
					? <div>
						<p style={{color: 'green'}}>Stock disponible</p>
						<h3>{`USD ${props.price * q}`}</h3>
					</div>
                    : <p style={{color: 'red'}}>No hay Stock</p>)						  
				    : (<p style={{color: '#FFC81B'}}>Seleccione una cantidad</p>)
                }
            </div>
        </div>
    );
};