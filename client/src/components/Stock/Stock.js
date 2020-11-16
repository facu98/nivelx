import React from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stock.css';

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
        } else {
            text.textContent = 'No hay Stock'
        }
    };
    
    return (
        <div className="Card">
            <div>
                <label><b>Cantidad:</b></label>
                <input type="number" id="quantity" name="quantity" min="1" value={data.val} onChange={handleChange}/>
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
            <div>
                <Button
                disabled={data.val === 0 || text.textContent === 'No hay Stock'}
                variant="contained" color="primary"
                size="medium"
                style={{ padding: '5px 25px' }}>
                Comprar
                </Button>

                <Button
                disabled={data.val === 0 || text.textContent === 'No hay Stock'}
                variant="outlined"
                color="primary"
                size='medium'
                style={{ margin: '25px', padding: '5px 25px' }}>
                Agregar al Carrito
                </Button> 
            </div>
        </div>
    );
};