import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Count} from '../Counter/Count'
import Stock from '../../Stock/Stock.js'
import { getProductsCart, deleteProductInCart, getProductById } from '../../../actions'

//fix
export const Shopping = ({
	cart,
	getProductsCart,
	deleteProductInCart,
	user
}) => {


	useEffect(() => {
		if(user && user.id){
			getProductsCart(user.id)
		}

		console.log(cart)

	}, [])

	return (
		<div>
			{cart && cart.length === 0
				? null
				: cart.map((cart) => (
						<div className='card mb-3 p-3' key={cart.product_id}>
							<div className='row'>
								<div className='col-md-4'>

							<img
								src={cart.product_img[0]}
										className='card-img'
										alt='...'
							/>

								</div>

								<div className='col-md-5'>
									<div className='card-body'>
										<h5 className='card-title'>
											{cart.product_name}
										</h5>
										<p className='card-text'>
											{cart.product_desc.slice(0, 50) +
												'...'}
										</p>
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
										className='btn align-self-start'
										onClick={() => {
											deleteProductInCart(user.id, cart.product_id)
										}}
									>
										X

									</button>
								</div>
							</div>
						</div>
				  ))}
		</div>
	)
}

const mapStateToProps = (store) => {
	return {
		user: store.user,
		cart: (store.user && store.user.id) ? store.cart : store.guestCart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProductsCart: (userId) => dispatch(getProductsCart(userId)),
		deleteProductInCart: (userId, productId) =>
			dispatch(deleteProductInCart(userId, productId)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
