import React from 'react';
import s from './Product.module.css';

import { useParams, Link } from 'react-router-dom';


export default function Product(props) {
    const { id } = useParams();
    //const url = useParams();
    const [product, setProduct] = React.useState(null);
    React.useEffect(() => {
        fetch(`http://localhost:3001/products/${id}`)
        .then((product) => product.json())
        .then((product => {setProduct(product)}))
    });

    if (!props) {
        return <h2 className= {s.sectionTitle}> No product to display </h2>
    }

    return (
        <section className={`${s.section} ${s.productSection}`}>
            <Link to='/' className={`${s.btn} ${s.btnPrimary}`}>
                back home
            </Link>
            <h2 className={s.sectionTitle}>{props.productos.title}</h2>
            <div className={s.product}>
                <img src={props.productos.pictures} alt={id}/>
                <div className={s.productInfo}>
                    <p>
                        <span className={s.productData}>Title:</span>
                        {props.productos.title}
                    </p>
                    <p>
                        <span className={s.productData}>Price:</span>
                        {props.productos.price}
                    </p>
                    <p>
                        <span className={s.productData}>Quantity:</span>
                        {props.productos.quantity}
                    </p>
                    <p>
                        <span className={s.productData}>Description:</span>
                        {props.productos.description}
                    </p>
                </div>
            </div>
        </section>
    );
}