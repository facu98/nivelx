import React from 'react';
import './review.css';
import { Star } from './Star';

export const Review = (props) => {

    return (
        <div className='card mb-3'>
            <div className="card-body p-3" >
            <div className="pt-2" >
                <h2>Opiniones sobre el producto</h2>
            </div>
            <div className="row" >
                <div className="col-2 text-center" >
                    <h1>{props.product.asessment}.0</h1>
                </div>
                <div className="col-10" >
                    <Star />
                    <p>Promedio entre {props.product.totalReviews} opiniones</p>
                </div>
            </div>
            <div >
                <Star />
                <p>Muy bueno</p>
                <blockquote>Buena calidad, más de lo esperado</blockquote>
            </div>
            </div>
        </div>
    )
}
