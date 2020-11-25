import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Shopping from './Shopping/Shopping'
import Summary from './Summary/Summary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux"
import {cleanOrder, clearGuestCart, getProductsCart} from "../../actions"

export const Cart = ({cart, user, getProductsCart}) => {

	useEffect(() => {
		//getProductsCart(1)

	}, [])

export const Cart = () => {
	const user = useSelector(state => state.user)
	const dispatch = useDispatch()
  
	return (
		<div className='container p-5'>
			<h1>
				<FontAwesomeIcon
					icon={['fas', 'shopping-cart']}
					style={{ marginRight: '20px' }}
				/>
			<center>	Carrito de compras </center>
			</h1>
			<hr />
			<div className=''>

					<Shopping />
					<div>

					<div class="row">
								<div class="col-7">
								</div>

								<div class="col-3">
								</div>

								<div class="col-2">
	<h4> Total:</h4>
								</div>
					</div>

					<div class="row">
						    <div class="col-7">
				    		</div>

				    <div class="col-3">
								<Button
										type="submit"
										fullWidth
										variant="contained"
										color="secondary"
										onClick={() => {
											if(user && user.id) dispatch(cleanOrder(user.id))
											else(dispatch(clearGuestCart()))
										}}
								>
										Vaciar carrito
								</Button>
			    	</div>

				    <div class="col-2">

								<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary">
													IR A CHECKOUT
									</Button>

				    </div>


					</div>
				  </div>





					</div>
			</div>

	)
}

// const mapStateToProps = (store) => {
// 	return {
// 		cart: store.cart,
// 		user: store.user,
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getProductsCart: (userId) => dispatch(getProductsCart(userId))
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Cart)