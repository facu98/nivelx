import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOrderbyID } from '../../actions/index';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function Order(data) {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const orders = useSelector(state => state.cart); // con esto accedo al estado del carrito
    //const state = useSelector(state => state.orders)
    const dispatch = useDispatch();
    console.log("**** soy data ****")
    console.log(data);
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
        dispatch(getOrderbyID(data.match.params.id)) 
        // hago q siempre se actualize la pagina cuando la pagina encuentra que el cart esta en "procesando"
    }, [orders]);
    console.log(orders);
    
    const completa = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/completa/${id}`)
        alert('compra completada!');
        data.history.push('/');
    };
    const cancelada = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/cancelada/${id}`)
        alert('compra cancelada');
        orders.state= "cancelada";
        data.history.push('/');
    };
    /*
    const creada = (id) => {
        //const { data } = axios.put(`http://localhost:3001/users/creada/${id}`)

    };
    */
    console.log("**** soy orders ****")
    console.log(orders)
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
                <h1 className="card-title">ID de la orden {orders.order_id}</h1>
                <h2 className="card-subtitle mb-2 text-muted">Status de la orden: {orders.state}</h2>
                {orders.product && orders.product.map((e) => (
                    <div>
                        <h5>Producto: {e.name}</h5>
                        <h6>Cantidad: {e.quantity}</h6>
                    </div>
                ))}
                <h1>Total: USD{total}</h1>
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