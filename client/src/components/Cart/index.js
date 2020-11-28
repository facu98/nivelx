import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import Shopping from './Shopping/Shopping'
import Summary from './Summary/Summary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import {cleanOrder, clearGuestCart, getProductsCart} from "../../actions"
//import state from 'sweetalert/typings/modules/state' ---- comente porq sale error ----
import axios from 'axios';//---- agrego axios ----
//import state from 'sweetalert/typings/modules/state' ---- comente porq sale error ----
export const Cart = ({ history }) => {
	useEffect(() => {
		//getProductsCart(1)

	}, [])

	const user = useSelector(state => state.user)
	const dispatch = useDispatch()

	// ----- Agrego funcionalidad al boton checkout -----
	// traigo estado
	//const orders = useSelector(state => state.cart)
	//console.log("**************** SOY EL ESTADO ***************");
	//console.log(orders);
	const [orders, setOrders] = useState('');
	console.log("**************** SOY EL ESTADO ***************");
	console.log(orders);
	const handleOrder = () => {
		setOrders('creada');
		//orders.setState({
		//	status: 'creada',
		//});

		if(user && user.id){
			setOrders('procesando');
			//orders.setState("procesando");
			//const { data } = await axios.post(`http://localhost:3001/auth/checkout/user`, order);
			history.push('http://localhost:3001/auth/checkout/user', [orders]);
		} else {

			history.push('http://localhost:3000/user/create', [orders]);
 
		}
		
		// history.push(path, [state]) - (function) Pushes a new entry onto the history stack
	}
	// ----------------------------------------

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
										color="primary"
										onClick={() => handleOrder()}
								>
													IR A CHECKOUT
									</Button>

				    </div>


					</div>
				  </div>





					</div>
			</div>

	)
}
