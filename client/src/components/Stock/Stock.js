import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stock.css';

export default function Stock(props) {
    let text = document.getElementsByClassName('text');
    let [data, setData] = React.useState({val: 0});

    const handleChange = (e) => {
        
        setData({
            ...data,
            val: parseInt(e.target.value),
        });
    
        if (data.val <= props.quantity){
            text.textContent = 'Stock disponible'
        } else {
            text.textContent = 'No hay Stock'
        }
    };
    
    return (
        <div className="Card">
            <label><b>Cantidad:</b></label>
            <input type="number" id="quantity" name="quantity" min="0" value={data.val} onChange={handleChange}/>
            <p  className="text" 
                style={text.textContent === 'Stock disponible' ? {color: 'green'} : {color: 'red'}}>
                {text.textContent} 
            </p>
        </div>
    );
};