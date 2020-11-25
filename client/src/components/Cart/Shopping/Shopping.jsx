import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProductsCart, deleteProductInCart, getProductById, productQuantity } from '../../../actions'
//fix
export const Shopping = ({
	cart,
	user,
	product,
	getProductsCart,
	getProductById,
	deleteProductInCart
}) => {

	useEffect(() => {
		getProductsCart(user.id)

	}, [])

	return (
		<div>
			{cart && cart.length === 0
				? null
				: cart.map((c, i) => (
						<div className='card mb-3 p-3' key={c.product_id}>
							<div className='row'>
								<div className='col-md-4'>

							{/*}	// <img
								// 	src={`http://localhost:3001/images/${cart.product_id.p[0]}`}
								// 	className='card-img'
								// 	alt='...'
								// />
								*/}
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
											deleteProductInCart(user.id, c.product_id)
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
		cart: store.cart,
		user: store.user,
		product: store.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getProductsCart: (userId) => dispatch(getProductsCart(userId)),
		deleteProductInCart: (userId, productId) => dispatch(deleteProductInCart(userId, productId)),
		getProductById: (productId) => dispatch(getProductById(productId))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping)
