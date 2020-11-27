import React, { useEffect, useState} from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';
import Shopping from './Shopping/Shopping'
import Summary from './Summary/Summary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import {cleanOrder, clearGuestCart, getProductsCart, total} from "../../actions"

export const Cart = () => {

	const user = useSelector(state => state.user)
	const cart = useSelector(state => state.cart)
	const tot = useSelector(state => state.total)
	const guestCart = useSelector(state => state.guestCart)
	const dispatch = useDispatch()

	const [amount, setAmount] = useState(0)
	const [shipping, setShipping] = useState(5)

	useEffect(() => {
		if(tot.length === 0){
			if(user && user.id){
				for(let i=0; i < cart.length; i++){
				dispatch(total(cart[i].price, i))
				}
			} else {
				for(let i=0; i < guestCart.length; i++){
				dispatch(total(guestCart[i].price, i))
				}
			}
		}
	}, [])

		setTimeout(() => {
			if(tot.length === 1){
				setAmount(tot)
			}
			let data = tot.length > 0 && tot.reduce((a, b) => a + b)
			setAmount(data)
		}, 1500);

	const handleTotal = () => {
		let data = tot.reduce((a, b) => a + b)
		setAmount(data)
	}
	
	if(cart.length || guestCart.length !==0){
	return (
		<div className='container p-5'>
			<h1>
				{/* <FontAwesomeIcon
					icon={['fas', 'shopping-cart']}
					style={{ marginRight: '20px' }}
				/> */}
			<center>	Carrito de compras </center>
			</h1>
			<hr />
			<div className=''>

					<Shopping
						listener= {handleTotal}
					/>
					
					<div>
					<div class="row">
								<div class="col-8">
									<b>Valor del pedido: </b><span>USD {amount},00</span><br/>
									<b>Descuento: </b><span>-USD 0,00</span><br/>
									<b>Envío: </b><span>USD {shipping},00</span>
								</div>
								<div class="col-4">
									<h3>
										Total: USD {amount + shipping}
									</h3>

									<b>
										{`${cart.length || guestCart.length}
										${cart.length || guestCart.length > 1
										? 'Productos' : 'Producto'}`}
									</b>
								</div>
					</div>
					<hr/>

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
	} else {
		return (
			<div>
				<h1>
				<FontAwesomeIcon
					icon={['fas', 'shopping-cart']}
					style={{ marginRight: '20px' }}
				/>
			<center>	Carrito de compras </center>
			</h1>
			<hr />
			<div class="card text-center">
				<div class="card-body">
    				<h5 class="card-title">No hay productos en el carrito</h5>
    				<p class="card-text">Puedes agregar productos desde el cátalogo</p>
					<Link to="/" class="btn btn-primary">Cátalogo</Link>
  				</div>
			</div>
			
			</div>
			
		)
	}
	
}
