import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link , useHistory} from 'react-router-dom';
import Shopping from './Shopping/Shopping';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {cleanOrder, clearGuestCart, total} from '../../actions'
import Button from '@material-ui/core/Button';
import './index.css'
//import state from 'sweetalert/typings/modules/state' ---- comente porq sale error ----
//import axios from 'axios';// ---- agrego axios ----
//import state from 'sweetalert/typings/modules/state' ---- comente porq sale error ----


// export const Cart = ({ history }) => {
// 	useEffect(() => {
// 		//getProductsCart(1)
//
// 	}, [])

export const Cart = () => {

	const user = useSelector(state => state.user)
	const history = useHistory()
	const cart = useSelector(state => state.cart)
	const tot = useSelector(state => state.total)
	const guestCart = useSelector(state => state.guestCart)
	
	const dispatch = useDispatch()

	const [amount, setAmount] = useState('')
	const [shipping, setShipping] = useState('')
	const [discount, setDiscount] = useState('')

  // ----- Agrego funcionalidad al boton checkout -----
	// asigno el estado inicial
	cart.state = "carrito";
	let url = window.location.href.split("/");
	//console.log("**** soy url ****");
	//console.log(url);

	const handleOrder = () => {
		cart.state = "creada";
		if(!user.id){
			alert('Para comprar debes iniciar sesión');
		} else {
			cart.state = "procesando";
			//const { data } = axios.post(`/user/:id`, [cart, user]);
			//this.props.history.push(`/tickets/${rowIndex[0]}`);
			//history.push('/user/:id', [cart, user]);
			
			history.push(`/user/${user.id}`, [user,cart]);
		}
	}
	// ----------------------------------------

	useEffect(() => {
		
		if(tot.length === 0){
			if(user && user.id){
				for(let i=0; i < cart.length; i++){
					dispatch(total(cart[i].price * cart[i].quantity))
				}
			} else {
				for(let i=0; i < guestCart.length; i++){
					dispatch(total(guestCart[i].price * guestCart[i].quantity))
				}
			}
		}
		if(user && (tot.length !== 0)){
			for(let i=0; i < cart.length; i++){
				tot[i]= parseInt(cart[i].price * cart[i].quantity)
			}
		}
	}, [])

	setTimeout(() => {
		if(tot.length === 1){
			setAmount(tot)
		}
		let data = tot.length > 0 && tot.reduce((a, b) => a + b)
		setAmount(data)
		setShipping(5)
		setDiscount(0)
	}, 2000);

	const handleTotal = () => {
		let data = tot.length > 0 && tot.reduce((a, b) => a + b)
		setAmount(data)
	}
	
	if(cart.length || guestCart.length !== 0){
	return (
		<div className='container p-5'>
			<h1>
				{/* <FontAwesomeIcon
					icon={['fas', 'shopping-cart']}
					style={{ marginRight: '20px' }}
				/> */}
				<center>Carrito de compras</center>
			</h1>
			<hr />
			<div className='container'>
				<Shopping
					listener= {handleTotal}
				/>
				<hr/>
				<div>
					<div class="row d-flex align-items-center justify-content-center" id="detail">
						<div class="col-8">
							<b>Valor del pedido: </b>
							<span>{`USD ${amount},00`}</span>
							<br/>
							<b>Descuento: </b>
							<span>{`USD ${discount},00`}</span>
							<br/>
							<b>Envío: </b>
							<span>{`USD ${shipping},00`}</span>
						</div>
						<div class="col-4">
							<h3>
								{`Total: USD ${(amount + shipping)-discount}`}
							</h3>
							<b>
								{`${cart.length || guestCart.length} ${cart.length || guestCart.length > 1 ? 'Productos' : 'Producto'}`}
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
									if(user && user.id){
										dispatch(cleanOrder(user.id))
									} else {
										(dispatch(clearGuestCart()))
									}
									tot.splice(0)
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
	} else {
		return(
			<div>
				<h1>
					<FontAwesomeIcon
						icon={['fas', 'shopping-cart']}
						style={{ marginRight: '20px' }}
					/>
					<center>Carrito de compras</center>
				</h1>
				<hr/>
				<div class="card text-center" style={{marginLeft: "27%"}}>
					<div class="card-body">
    					<h5 class="card-title">No hay productos en el carrito</h5>
    					<p class="card-text">Puedes agregar productos desde el cátalogo</p>
						<Link to="/" class="btn btn-primary">Ir al cátalogo</Link>
  					</div>
				</div>
				<hr/>
			</div>
		)
	}
}
