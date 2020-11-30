import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOrderbyID } from '../../actions/index';
import { makeStyles } from "@material-ui/core/styles";
import { getProductsCart, changeStateOrder } from '../../actions/index';

import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function Order({match}) {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const orders = useSelector(state => state.order); // con esto accedo al estado del carrito
    const tottal = useSelector(state => state.total)
    //const state = useSelector(state => state.orders)
    const dispatch = useDispatch();

    console.log("**** soy data ****")

    let total = 0;



    if (orders && orders.product) {
        const total = async () => {
            for (let i = 0; i < orders.product.length; i++) {
                total += orders.product[i].price * orders.product[i].order.quantity
            }
            return total;
        }
        total();
    }


    useEffect(() => {
        dispatch(getOrderbyID(match.params.id))
        // hago q siempre se actualize la pagina cuando la pagina encuentra que el cart esta en "procesando"
    }, []);


    const completa = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/completa/${id}`)

        alert('compra completada!');
        //data.history.push('/');
    };
    const cancelada = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/cancelada/${id}`)
        const data = {state: 'cancelada', orderId: orders.id}

      dispatch(changeStateOrder(user.id, data))

        alert('compra cancelada');

        //data.history.push('/');
    };
    /*
    const creada = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/creada/${id}`)

    };
    */



    return(
        <div style={{ marginTop: "70px" }}>
            <a href="javascript:history.back(1)" className="btn1" style={{ marginTop: "10px"}}>
                <div>
                    <Button variant="contained" color="secondary">
                        Volver a llenar formulario
                    </Button>
                </div>
            </a>
            <br/>
            <div className="card" style={{ width: "700px", height: "100%", marginLeft: "30%" }}>
                <div className="card-body">
                <h1 className="card-title">ID de la orden {orders.id}</h1>
                <h2 className="card-subtitle mb-2 text-muted">Status de la orden: {orders.state}</h2>
                {orders.product && orders.product.map((e) => (
                    <div>
                        <h5>Producto: {e.name}</h5>
                        <h6>Cantidad: {e.quantity}</h6>
                    </div>
                ))}
                <h1>Total: USD{tottal}</h1>
                {/*orders && orders.state === "procesando" && <Button onClick={() => creada(orders.id)} variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "20px", backgroundColor: "green" }}>
                    Procesar
                </Button>*/}
                {orders && orders.state === "completa" && <Button onClick={() => completa(orders.id)} variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "20px", backgroundColor: "green" }}>
                    Completar
                </Button>}
                <Button onClick={() => cancelada(orders.id)} variant="contained" color="secondary">
                    Cancelar
                </Button>
                </div>
            </div>
        </div>
    );
};
