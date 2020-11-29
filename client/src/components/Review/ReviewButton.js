import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import './review.css';
import {useDispatch, useSelector} from 'react-redux'
import { sentReview, getReview, editReview, deleteReview } from '../../actions';


export const ReviewButton = (props) => {

    const user = useSelector(state => state.user)
    const userReview = useSelector(state => state.review)
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const dispatch = useDispatch()
    const [review, setReview] = useState({
      rating: "",
      title: "Muy Bueno",
      estrellas: "",
    });

    useEffect(() => {
      dispatch(getReview(user.id, props.product.product_id))
    },[])



    const handleSubmit = (e) => {
      e.preventDefault();

      const newReview = {
        score: review.estrellas,
        title: review.title,
        comments: review.rating ? review.rating : "Sin comment",
        userId: user.id,
        orderId:props.product.order_id
      }
      if(!props.product.review){
        dispatch(sentReview(props.product.product_id, newReview));
      }
      else{
        dispatch(editReview(props.product.product_id, userReview.id, newReview))  //EDIT REVIEW
      }

    }

    const handleDelete = () => {
      dispatch(deleteReview(props.product.product_id, userReview.id, user.id))
    }

    const onChange = (e) => {
      console.log(review)
        setReview({
            ...review,
            [e.target.name]: e.target.value,
        });
      };
    return (
        <div>
            <section >
                <section>
                <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;

                  return (
                    <label key={i}>
                      <input
                        className="input-start"
                        type="radio"
                        name="estrellas"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        onChange={onChange}
                      />
                      <FaStar
                        className="star"
                        color={ratingValue <= (hover || rating) ? "#FA341C" : "grey"}
                        size={25}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
          { userReview && <button
                  className="btn btn-primary mb-2"
                  onClick={handleDelete}
                >
                  Eliminar reseña
                </button>}
              </div>
                    <textarea
                    rows={5}
                    className="form-control mb-3"
                    name="rating"
                    type='text'
                    placeholder="Ingresa tu reseña..."
                    value={review.rating}
                    onChange={onChange}
                    />
                </section>
                <button
                  className="btn btn-primary mb-2"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
            </section>
        </div>
    )
}
