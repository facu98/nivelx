import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { getProductsCart, deleteProductInCart, getProductById } from '../../actions'
import {Count} from '../Cart/Counter/Count'

export default function Admin(props) {
const cart = useSelector(state => state.cart)
const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProductsCart(props.id))


	}, [])

	return (
		<div>
		{cart && cart.length === 0
			? null
			: cart.map((cart) => (
					<div className='card mb-3 p-3' key={cart.product_id}>
						<div className='row'>

							<div className='col-md-5'>
								<div className='card-body'>
									<h5 className='card-title'>
										{cart.product_name}
									</h5>
								</div>
							</div>
							<div className='col-md-3 d-flex align-items-center justify-content-center'>
								<Count
									price= {cart.price}
									quantity= {cart.quantity}
									id= {cart.product_id}
									name= {cart.product_name }
									function= {getProductById(cart.product_id).payload}
								/>
								<button
									onClick={() => {
										 dispatch(deleteProductInCart(props.id, cart.product_id))
									}}
								>
									Eliminar producto

								</button>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}
