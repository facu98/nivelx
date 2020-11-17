import React from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './Stock.css';

export default function Stock(props) {
    let text = document.getElementsByClassName('text');
    let prices = document.getElementsByClassName('prices');
    let [data, setData] = React.useState({val: 0});

    const handleChange = (e) => {
        setData({
            ...data,
            val: parseInt(e.target.value),
        });
    
        if (data.val + 1 <= props.quantity){
            text.textContent = 'Stock disponible'
            prices.textContent = `USD ${(data.val + 1) * props.price}`
        }
        if (data.val + 1 === props.quantity) {
            text.textContent = `¡Lo sentimos! solo hay ${props.quantity} ${props.name} en stock`
        }
    };
    
    return (
        <div className="Card">
            <div>
                <label><b>Cantidad:</b></label>
                <input type="number" id="quantity" name="quantity" min="1" max={props.quantity} value={data.val} onChange={handleChange}/>
                <span 
                style={data.val >= 1 ? {display: 'none'} : {color: 'red', marginLeft: '15px'}}>
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