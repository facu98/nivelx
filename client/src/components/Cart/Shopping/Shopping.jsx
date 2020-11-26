import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Count} from '../Counter/Count'
import Stock from '../../Stock/Stock.js'
import { getProductsCart, deleteProductInCart, getProductById, removeProductGuest } from '../../../actions'

//fix
export const Shopping = ({
	cart,
	user,
	product,
	getProductsCart,
	getProductById,
	deleteProductInCart,
	removeProductGuest

}) => {

	useEffect(() => {
		if(user && user.id){
			getProductsCart(user.id)
		}



	}, [])

	return (
		<div>
			{cart && cart.length === 0
				? null
				: cart.map((c, i) => (
						<div className='card mb-3 p-3' key={c.product_id}>
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
											{c.product_name}
										</h5>
										<p className='card-text'>
											{c.product_desc.slice(0, 50) +
												'...'}
										</p>
									</div>
								</div>
								<div className='col-md-3 d-flex align-items-center justify-content-center'>

									<div>
                						<label><b>Cantidad:</b></label>
										<input
											type="number" 
											id="quantity" 
											name="quantity" 
											min="1" 
											value={c.quantity}
											onChange={(e) => {
												getProductById(c.product_id)
												if(c.quantity <= product.quantity){
													c.quantity = parseInt(e.target.value)
													c.total_price = c.price * c.quantity	
												}
											}}
										/>
										{
											(c.quantity <= product.quantity || c.quantity === 1)
											? <div>
												<p style={{color: 'green'}}>Stock disponible</p>
												<h3>{`USD ${c.price * c.quantity}`}</h3>
											</div>
											: <p style={{color: 'red'}}>No hay Stock</p>
										}
            						</div>
									<button
										className='btn align-self-start'
										onClick={() => {
											if(user && user.id){deleteProductInCart(user.id, cart.product_id)}
											else removeProductGuest(cart.product_id)
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
		product: store.products,
		cart: (store.user && store.user.id) ? store.cart : store.guestCart

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProductsCart: (userId) => dispatch(getProductsCart(userId)),
		deleteProductInCart: (userId, productId) => dispatch(deleteProductInCart(userId, productId)),
		getProductById: (productId) => dispatch(getProductById(productId)),
		removeProductGuest: (productId) => dispatch(removeProductGuest(productId))

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
