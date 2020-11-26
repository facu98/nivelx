import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsCart } from '../../reducers/index';
import axios from 'axios';

export default function checkout({ history }) {
    const dispatch = useDispatch;
    const orders = useSelector((store) => store.cart.cart);
    console.log(orders.id);
    const user = useSelector((store) => store.user.user);
    console.log(user.id);

    // actualiza form
    const [form, setForm] = useState({
        country: "",
        city: "",
        shipping_address: "",
        postal_code: "",
        phone_number: "",
    });

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // destructuring
    const {
        country,
        city,
        shipping_address,
        postal_code,
        phone_number,
    }

    let sum = 0;
    
    const total = async() => {
        for (let i = 0; i < orders.length; i++) {
            sum += orders.products[i].price * orders.products[i].order.quantity
        };

        const info = {
            email: user.email,
            total: sum,
        };

        const { data } = await axios.post(`http://localhost:3001/auth/checkout/user`, info);

        return total;
    }

    console.log(orders);

    const onSubmit = e => {
        e.preventDefault();
        setForm({
            country,
            city,
            shipping_address,
            postal_code,
            phone_number,
        });
    }

    const postCheck = async (userId, orderId) => {
        const info = {
            country = form.country,
            city = form.city,
            shipping_address = form.shipping_address,
            postal_code = form.postal_code,
            phone_number = form.phone_number,
        }

        if (form.country && form.city && form.shipping_address && form.postal_code && form.phone_number) {
            const { data } = await axios.post(`http://localhost:3001/users/${userId}/carrito/${orderId}`, info);
            await axios.put(`http://localhost:4000/users/procesando/${orderId}`);
            total();
            localStorage.removeItem("cart");
            alert('compra exitosa');
            history.push('/');
        }
    }


    return(
        <div className="form-user">
            <div className="contenedor-form sombra-dark">
                <h1>Finalizar Compra</h1>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="campo-form">
                        <label htmlFor="country">Pais</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="country"
                            value={country}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="shipping_address">Pais</label>
                        <input
                            type="text"
                            id="shipping_address"
                            name="shipping_address"
                            placeholder="shipping_address"
                            value={shipping_address}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="postal_code">Codigo Postal</label>
                        <input
                            type="text"
                            id="postal_code"
                            name="postal_code"
                            placeholder="postal_code"
                            value={postal_code}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="phone_number">Telefono</label>
                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            placeholder="phone_number"
                            value={phone_number}
                            onChange={onChange} 
                        />
                    </div>
                    <div className="campo-form">
                        <button className=" btn btn-primario btn-block" onClick={() => postChek(user.id, orders.id)} >
                            Comprar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}