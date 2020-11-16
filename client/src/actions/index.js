import swal from  'sweetalert';
import {Redirect, Route, Switch, useLocation } from "react-router-dom";

//ACTIONS PRODUCTOS
export function getProducts(){
	return function(dispatch){
		return fetch('http://localhost:3001/products')
				.then((res) => res.json())
				.then((data) => {
					dispatch(
						{
								type: 'GET_PRODUCTS',
								payload: data
						})
					console.log(data) })
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

export function loginUser(email, password){
	return function(dispatch){
		return fetch(`http://localhost:3001/users/login/${email}/${password}`)
			.then((res) => {
				console.log(res)
				if(!res){alert("error")}
				if(res.status === 404){throw new Error('El usuario no existe')}
				else if(res.status === 401){throw new Error('Password invalido')}
				else return res.json()
			})
				.then((res) => {
					dispatch({
						type: 'LOGIN_USER',
						payload: res
					})
				})

				.then((res)=>{
					console.log("Respuesta",res);
						swal("Bienvenido!", "","success");

						})
				.catch((err) => {
														var title = `${err}`
														swal("Ups", title, 'error')
											  })

											}}
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
				method: "DELETE"
		})
		.then((data) => {

			return dispatch(getUsers())

		})
		.then((alert("DELETED!")))

} }

export function createUser(data){
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

			title == 'Error: 409' ? swal(title, 'Ya existe un usuario con ese mail', 'error') : swal(title, 'Algo salió mal..', 'error')
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


export const addProductCart = (idUser, idProduct) => async dispatch => {
		await fetch(`http://localhost:3001/users/${idUser}/cart`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ productId: idProduct }),
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
		console.log("ID", id)
    return fetch(`http://localhost:3001/users/${id}/cart`)
      .then((res) => res.json())
      .then((order) => {

        order.name == 'SequelizeDatabaseError' || order.length === 0
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

export function cleanOrder() {
  return function (dispatch) {
    return fetch(`http://localhost:3002/user/cart`, {
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
        : swal('Error al cancelar la orden', '', 'error')
    )
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
