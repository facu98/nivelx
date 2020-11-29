import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom';
import { getProductsCart, deleteProductInCart, getProductById, removeProductGuest, addTotal, productQuantity } from '../../../actions'
import "./Shopping.css"
//fix
export const Shopping = ({
	cart,
	user,
	product,
	getProductsCart,
	getProductById,
	deleteProductInCart,
	removeProductGuest,
	listener

}) => {

	const dispatch = useDispatch()
	const tot = useSelector(state => state.total)
	useEffect(() => {
		if(user && user.id){
			getProductsCart(user.id)
		}
	}, [])
	
	return (
		<div>
			{cart && cart.length === 0
				? <div className='align-items-center justify-content-center'>
					<h4><center>No hay productos en el carrito</center></h4>
				</div>
				: cart.map((c, i) => (
						<div className='card border-secondary ml-auto mr-auto mt-3 mb-3 p-3' key={c.product_id}>
							<div className='row'>
								<div className='col-md-4'>
							<img
								src={c.product_img[0]}
										className='card-img'
										alt='...'
							/>
								</div>

								<div className='col-md-4'>
									<div className='card-body'>
										<h5 className='card-title'>
											<Link to={`/products/${c.product_id}`}>
												{c.product_name}
											</Link>
											
										</h5>
										<p className='card-text'>
											{c.product_desc.slice(0, 50) +
												'...'}
										</p>
									</div>
								</div>
								<div className='col-md-4 d-flex align-items-center justify-content-center'>

									<div>
                						<label><b>Cantidad:</b></label>
										<input
											type="number" 
											id="q"
											className={
												c.quantity <= product.quantity || c.quantity === 1 || product.quantity === undefined
												? "form-control is-valid"
												: "form-control is-invalid"
											}
											min="1"
											max={product.quantity + 1}
											value={c.quantity}
											onload={()=>{
												getProductById(c.product_id)
												c.total_price = c.price * c.quantity
											}}
											onClick={listener} //Llega desde props
											onKeyDown={listener}
											onChange={(e) => {
												getProductById(c.product_id)
												if(c.quantity <= product.quantity + 1 || c.quantity === 1){
													c.quantity = parseInt(e.target.value)
													c.total_price = c.price * c.quantity
													dispatch(addTotal(parseInt(c.total_price), i))
												}
												if(c.quantity > product.quantity){
													dispatch(addTotal(0, i))
												}
												if(isNaN(c.quantity)){
													c.quantity = 1
												}
												dispatch(productQuantity(e.target.value))
											}}
										/>
										{
											(c.quantity <= product.quantity || c.quantity === 1 || product.quantity === undefined)
											? <div>
												<p style={{color: 'green'}}>Stock disponible</p>
												<h3>{`USD ${c.price * c.quantity}`}</h3>
												<small 
													className='unidad'
													style={c.quantity === 1 ? {display: 'none'} : null}
												>
													<b>Precio por unidad: </b>
													<span>{`USD ${c.price}`}</span>
												</small>
											</div>
											: <p style={{color: 'red'}}>No hay Stock</p>
										}
            						</div>
									<button
										className='btn btn-outline-danger align-self-start mr-5 mb-5 '
										onClick={() => {
											if(user && user.id){
												deleteProductInCart(user.id, c.product_id)
												tot.splice(i, 1)
											} else {
												tot.splice(i, 1)
												removeProductGuest(c.product_id)
											}
										}}
									>
										<svg 
											width="25px" 
											height="25px" 
											viewBox="0 0 16 16" 
											class="bi bi-x" 
											fill="currentColor" 
											xmlns="http://www.w3.org/2000/svg"
											>
												<path 
											  		fill-rule="evenodd" 
											  		d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
												/>
										</svg>
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
