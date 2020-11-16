import React from 'react';
import s from './Product.module.css';
import Stock from '../Stock/Stock.js'

import { useParams, Link } from 'react-router-dom';
//IMPORTE EL COMPONENTE BUTTON DE MATERIAL UI
import Button from '@material-ui/core/Button';

export default function Product({match}) {
    const [product, setProduct] = React.useState(null);
    React.useEffect(() => {
                          fetch(`http://localhost:3001/products/${match.params.id}`)
                              .then((product) => product.json())
                              .then((product => {setProduct(product)}))
                          },[]);

    if (!product) {
        return <h2 className= {s.sectionTitle}> No product to display </h2>}


console.log(product)
    return (
        <section className={`${s.section} ${s.productSection}`}>
            <Link to='/' className={`${s.btn} ${s.btnPrimary}`}>
                Regresar a Pagina Principal
            </Link>
            <h2 className={s.sectionTitle}>{product.name}</h2>
            <div className={s.product}>
                <img className={s.productImg} src={product.pictures[0]} alt={product.id}/>
                <div className={s.productInfo}>
                    <p>
                        <span className={s.productData}>Precio:</span>
                         USD {product.price}
                    </p>
                    <p>
                        <span className={s.productData}>Marca:</span>
                        {product.brand}
                    </p>
                    <p>
                        <span className={s.productData}>Descripción:</span>
                        {product.description}
                    </p>
                </div>

                <Stock
                quantity = {product.quantity}
                price = {product.price}
                />
            </div>
        </section>
    );
}
