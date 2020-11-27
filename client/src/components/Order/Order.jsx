import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOrderbyID } from '../../reducers/index';
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
    const order = useSelector(store => store.carrito.order); // con esto accedo al estado del carrito
    const dispatch = useDispatch();
    console.log(data);
    let total = 0;

    if (order && order.products) {
        const total = async () => {
            for (let i = 0; i < order.products.length; i++) {
                total += order.products[i].price * orden.products[i].orden.quantity
            }
            return total;
        }
        total();
    }


    useEffect(() => {
        dispatch(getOrderbyID(data.match.params.id)) 
        // hago q siempre se actualize la pagina cuando la pagina encuentra que el cart esta en "procesando"
    }, [order]);
    console.log(order);

    const completa = (id) => {
        const { data } = axios.put(`http://localhost:3001/users/completa/${id}`)
    };
    const cancelada = (id) => {
        const { data } = axios.put(`http://localhost:3001/users/cancelada/${id}`)
    };
    const creada = (id) => {
        const { data } = axios.put(`http://localhost:3001/users/creada/${id}`)
    };

    return(
        <div style={{ marginTop: "70px" }}>
            <a href="javascript:history.back(1)" className="btn1" style={{ marginTop: "10px"}}>
                <div>
                    <Button variant="contained" color="secondary">
                        Volver
                    </Button>
                </div>
            </a>
            <br/>
            <div className="card" style={{ width: "700px", height: "100%", marginLeft: "30%" }}>
                <div className="card-body">
                <h1 className="card-title">ID de la orden {order.id}</h1>
                <h2 className="card-subtitle mb-2 text-muted">Status de la orden: {order.state}</h2>
                {order.products && order.products.map((e) => (
                    <div>
                        <h5>Producto: {e.name}</h5>
                        <h6>Cantidad: {e.quantity}</h6>
                    </div>
                ))}
                <h1>Total: USD{total}</h1>
                {order && order.state === "procesando" && <Button onClick={() => creada(order.id)} variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "20px", backgroundColor: "green" }}>
                    Procesar
                </Button>}
                {order && order.state === "creada" && <Button onClick={() => completa(order.id)} variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "20px", backgroundColor: "green" }}>
                    Completar
                </Button>}
                <Button onClick={() => cancelada(order.id)} variant="contained" color="secondary">
                    Cancelar
                </Button>
                </div>
            </div>
        </div>
    );
};