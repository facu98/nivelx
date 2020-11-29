import './review.css';
import { Star } from './Star';
import SimpleRating from './Rating'
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {getReviews} from '../../actions';



export const Review = (props) => {
  const reviews = useSelector(state => state.reviews)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviews(props.product.id))
  }, [])

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
                    <SimpleRating score={props.product.asessment}/>
                    <p>Promedio entre {props.product.totalReviews} opiniones</p>
                </div>
            </div>
{ reviews && reviews.map((review) => {
  return (
    <div >
          <SimpleRating score={review.score}/>
          <p>{review.title}</p>
          {review.comments && <blockquote>{review.comments}</blockquote>}
      </div>
  )
}) }
            </div>
        </div>
    )
}
