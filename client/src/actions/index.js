import swal from  'sweetalert';
import {Redirect, Route, Switch, useLocation } from "react-router-dom";

//ACTIONS PRODUCTOS
export function getProducts(){
	return function(dispatch){
		return fetch('http://localhost:3001/products', {credentials: 'include'})
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_PRODUCTS',
								payload: data
						})
				 })
	}
}

export function getProductById(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/products/${id}`)
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_PRODUCTS_ID',
								payload: data
						})
					 				})

	}
}

export function searchbyCategory(name) {
	return function(dispatch){
		return fetch(`http://localhost:3001/category/${name}`)
					.then((res) => res.json())
					.then((data) => {
						dispatch(
							{
								type: "GET_CATEGORY_PRODUCTS",
								payload:data
							})
						})
	}}

	export function searchbyQuery(query) {
		return function(dispatch){
			return fetch(`http://localhost:3001/products/search?name=${query}`)
						.then((res) => res.json())
						.then((data) => {
							dispatch(
								{
									type: "GET_QUERY_PRODUCTS",
									payload:data
								})
							})
		}}

		export function productsPage(page){
			return function (dispatch){
				return dispatch(getProducts())
				.then(() => {
					dispatch({
						type: 'PRODUCTS_PAGE',
						payload: page - 1
					})
				})

			}
		}

//ACTIONS PARA CATEGORIAS
export function getCategories(){
	return function(dispatch){
		return fetch('http://localhost:3001/category')
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_CATEGORIES',
								payload: data
						})
					 		})
				.then(() => {
					 dispatch(isLogged())
				})
	}
}

//ACTIONS PARA USERS
export function getUsers(){
	return function(dispatch){
		return fetch('http://localhost:3001/users')
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_USERS',
								payload: data
						})
					 	})
				}
}

export function loginUser(data){
	return function(dispatch){
		return fetch(`http://localhost:3001/users/login`,
			{
				credentials: 'include',
				method: 'POST',
				body: JSON.stringify(data),
				mode: 'cors',
				headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}})
					.then((res) => {
						if(res.status === 401){throw new Error('Usuario o password incorrecto.')}
						else if(res.status === 500){throw new Error('Algo salio mal..')}
						else return res.json()})

					.then((res) => {

						const serialisedState = JSON.stringify(res.user);
					 	localStorage.setItem("user", serialisedState)
						dispatch({
							type: 'LOGIN_USER',
							payload: res.user
						})
						return res.user
					})

				.then((res)=>{

						swal("Bienvenido!",`${res.name} ${res.lastname}`,"success");

						})
						.catch((err) => {
																	var title = `${err}`
																	swal("Ups", title, 'error')
														  })
							 							}}



export function logOut(){
	return function(dispatch){
		return fetch('http://localhost:3001/users/logout',{credentials:'include'})
		.then(() => {
			localStorage.user = []

			dispatch({
				type:'LOGOUT_USER'
			})
		})

	}

}

export function isLogged(){
	return function(dispatch){
		return fetch('http://localhost:3001/users/islogged', {credentials: 'include'})
		.then((res) => {
			if(!res || res.status !== 200) {return false}
			else return res.json()
		})
		.then((res) => {
			dispatch({
				type: 'IS_LOGGED',
				logged:res
			})
			return res
		})
		.then((res) => {
			var guestCart = res && localStorage.getItem('guest')
			if(guestCart){
				if(window.confirm('Se detectaron productos en tu carrito de invitado, deseas agregarlos a tu carrito de usuario?')){
					 dispatch(syncCart(res.id, guestCart))

				}
					}
				return res.id
			})
			.then((id) => {
				return dispatch(getProductsCart(id))
			})
	}
}

export function syncCart(id, cart){
	return function(dispatch){
		console.log(cart)
		return fetch(`http://localhost:3001/users/${id}/cartsync`,
	{credientials: 'include',
		method: "PUT",
		body: cart,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
	}
})
	.then((res) => {
			return dispatch(clearGuestCart())
	})
	}
}

export function getUserById(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/users/${id}`)
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_USER_ID',
								payload: data
						})
					 	})
				}
}

export function editUser(id,data){
	return function(dispatch){
		return fetch(`http://localhost:3001/users/${id}`,
		{
				method: "PUT",
				body: JSON.stringify(data),
				headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
				}
		})
		.then((data) => {

			return dispatch(getUsers())

		})
		.then(alert("CHANGED!"))
	}
}



export function deleteUser(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/users/${id}`,
		{
			credentials:'include',
				method: "DELETE"
		})
		.then((data) => {

			return dispatch(getUsers())

		})
		.then((alert("DELETED!")))

} }

export function promoteUser(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/admin/promote/${id}`, {
			credentials:'include',
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			}
		})
		.then((res) => res.json())
		.then((user) => {
			dispatch({
				type: 'PROMOTE_USER'
			})
		})
		.then(() => {return dispatch(getUsers())})
	}
}

export function createUser(data){
	console.log(data)
	return function(dispatch){
	return fetch('http://localhost:3001/users',{
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
	})
	.then((data) => {
		if(data.status === 409){throw new Error(409)}
		else if (data.status !== 201){throw new Error(`${data.status}`)}
		else
									dispatch({
														type:'CREATE_USER',
															payload:data
														})
	})
	.then((res)=>{
			swal("GENIAL!", "Se ha creado el usuario exitosamente","success");

	})
	.catch((err)=>{
			var title = `${err}`

			title === 'Error: 409' ? swal(title, 'Ya existe un usuario con ese mail', 'error') : swal(title, 'Algo salió mal..', 'error')
	})
	}

}

//ACTIONS para manipular orders (ADMIN)

export function getOrders(){
	return function(dispatch){
		return fetch('http://localhost:3001/orders')
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_ORDERS',
								payload: data
						})
					 				})

	}
}

export function getOrderbyID(id){
	return function(dispatch){
		return fetch(`http://localhost:3001/orders/${id}`)
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_ORDER_ID',
								payload: data
						})
					 				})

	}
}


// ACTIONS RELACIONADAS AL CARRITO DE COMPRAS
// addProductCart (agrega al carrito)
// deleteProductInCart (borra un producto especifico)
// updateCountProductInCart (actualiza el contador del carrito)


export const addProductCart = (idUser, idProduct, quantity) => async dispatch => {
		await fetch(`http://localhost:3001/users/${idUser}/cart`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ productId: idProduct, quantity }),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: 'ADD_PRODUCT_IN_CART',
					payload: data[0]
				})
			})
			.then(() => {
				return dispatch(getProductsCart(idUser))
			})
			.then((res)=>{
				swal("Producto añadido al carrito", "","success");
				})
}

export function addProductGuest(product, quantity){
	return function (dispatch){
		let storageCart = JSON.parse(localStorage.getItem('guest'))
		let finder = storageCart && storageCart.findIndex((p) => p.product_id === product.product_id)
		if(storageCart && finder !== -1){
		quantity ? (storageCart[finder].quantity) = quantity : (storageCart[finder].quantity ++)
		localStorage.setItem('guest', JSON.stringify(storageCart))

			dispatch({
				type:'SUM_QUANTITY'
			})
		}
		else
		dispatch({
			type:'ADD_PRODUCT_CART_GUEST',
			payload: product
		})
		swal("Producto añadido al carrito", "","success");
	}
}

export function removeProductGuest(productId){
	return function (dispatch){
		let storageCart = JSON.parse(localStorage.getItem('guest'))
		let filter = storageCart && storageCart.filter((p) => p.product_id !== productId)
		dispatch({
			type:'REMOVE_PRODUCT_CART_GUEST',
			payload: filter
		})
	}
}

export function clearGuestCart(){
	return function(dispatch){
		dispatch({
			type: 'CLEAR_GUESTCART'
		})
	}
}


export const deleteProductInCart = (userId, idProduct) => async dispatch => {
      		await fetch(`http://localhost:3001/users/${userId}/cart`, {
      			method: 'DELETE',
      			headers: {
      				Accept: 'application/json',
      				'Content-Type': 'application/json',
      			},
      			body: JSON.stringify({ productId: idProduct }),
      		})
      			.then((product) => {
      				dispatch({
      					type: 'DELETE_PRODUCT_CART',

      				})
      			})
						.then(() => {
							return dispatch(getProductsCart(userId))
						})
      }


export const updateCountProductInCart = (userId, idProduct, count) => async dispatch => {
	try {
		await fetch(`http://localhost:3001/user/${userId}/cart`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ productId: idProduct, quantity: count }),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: 'UPDATE_COUNT_PRODUCT',
					payload: data.products,
				})
			})
			.catch(console.log)
	} catch (err) {
		console.log(err)
	}

}

export function getProductsCart(id) {
  return function (dispatch) {
		//console.log("ID", id)
    return fetch(`http://localhost:3001/users/${id}/cart`)
      .then((res) => res.json())
      .then((order) => {
        order.name === 'SequelizeDatabaseError' || order.length === 0

          ? dispatch({
              type: 'GET_PRODUCTS_IN_CART',
              payload: [],
            })
          : dispatch({
              type: 'GET_PRODUCTS_IN_CART',
              payload: order,
            })
      })
  }
}

export function cleanOrder(id) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/users/${id}/cart/all`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) =>
      res.status === 200
        ? dispatch({
            type: 'CLEAN_ORDER',
          })
        : swal('Error al vaciar carrito', '', 'error')
    )
		.then(() => {
			return dispatch(getProductsCart())
		})
  }
}

export function changeStateOrder(userID, data) {
	return function(dispatch){
		return fetch(`http://localhost:3001/users/${userID}/order`,
			{
					method: "PUT",
					credentials: 'include',
					body: JSON.stringify(data),
					headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
					}
			})
			.then((res) => {
				res.status === 200
				? dispatch({
						type: 'EDIT_ORDER',
					})
				: swal('Error al editar la orden', '', 'error')
			})
			.then(() => {
				return dispatch(getOrders())
			})

	}
}

export function getClosedOrders() {
  return function (dispatch) {
    return fetch('http://localhost:3002/orders/admin?search=completa', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((closedOrders) =>
        dispatch({
          type: 'GET_CLOSED_ORDERS',
          payload: closedOrders,
        })
      )
  }


}

//ACTIONS PARA CART Y DISPONIBILIDAD DE PRODUCTO

export function productQuantity(quantity) {
	return function(dispatch){
		dispatch({
			type: 'GET_QUANTITY',
			payload: quantity
		})
	}
}

export function total(price) {
	return function(dispatch){
		dispatch({
			type: 'TOTAL',
			price
		})
		
	}
}

export function addTotal(price, position) {
	return function(dispatch){
		dispatch({
			type: 'ADD_TOTAL',
			price, 
			position
		})
	}
}


///// ACTIONS DE CREAR PRODUCTO ////////////////

export const createProduct = (producto) => async dispatch => {
	try {
		const data = await fetch('http://localhost:3001/products', {
			method: 'POST',
			body: JSON.stringify(producto),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const res = await data.json()

		dispatch({
			type: 'CREATE_PRODUCT',
			payload: res.product,
		})
	} catch (error) {
		console.log(error)
		swal('Algo salio mal', ':(', 'error')
	}
}





/////////////////////////////////

////// ENVIO DE MAILS  //////////

/////////////////////////////////

// reset password mail
export const sendMail = async (mail) => {
	try {
		await fetch('http://localhost:3001/user/reset_password', {
		method: 'POST',
		body: JSON.stringify({email: mail}),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	.then(res=>res.json())
	.then(data=>swal("Success",`${data}`,"success"))
	} catch (err) {
		console.log(err)
	}
}


// mail cuando haces la compra to, subject, products, user

export const buyMail = async (to, subject, products, user) => {
	try {
		await fetch('http://localhost:3001/complete_buy', {
			method: 'POST',
			body: JSON.stringify({to, subject, products, user}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	} catch (err) {
	}
}


// mail cuando se despacha la compra
export const dispatchMail = async (to, subject, user, id) => {
	try {
		await fetch('http://localhost:3001/dispatch_buy', {
			method: 'POST',
			body: JSON.stringify({to: to, subject: subject, user: user, id: id}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log('tu compra ha sido despachada..!')
	} catch (err) {
		console.log('ERROR, no esta mandando el mail', err)
	}
}


// mail cuando se cancela la compra
export const cancelMail = async (to, subject, user, id) => {
	try {
		await fetch('http://localhost:3001/cancel_buy', {
			method: 'POST',
			body: JSON.stringify({to: to, subject: subject, user: user, id: id}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log('tu compra ha sido cancelada..!')
	} catch (err) {
		console.log(err)
	}
}
