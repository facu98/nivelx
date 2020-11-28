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
                {order && order.state === 'completa' ? <div className="card-body">
                <h1 className="card-title">ID de la orden {order.id}</h1>
                <h2 className="card-subtitle mb-2 text-muted">Status de la orden: {order.state}</h2>
                {order.products && order.products.map((e) => (
                    <div>
                        <h5>Producto: {e.name}</h5>
                        <h6>Cantidad: {e.quantity}</h6>
                        <h6>Precio: USD${e.quantity * e.price}</h6>
                    </div>
                ))}
                </div> : null}
            </div>
        </div>
    );
};