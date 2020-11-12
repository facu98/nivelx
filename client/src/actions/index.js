import swal from  'sweetalert';



// ACTIONS RELACIONADAS AL CARRITO DE COMPRAS
// addProductCart (agrega al carrito)
// deleteProductInCart (borra un producto especifico)
// updateCountProductInCart (actualiza el contador del carrito)


export const addProductCart = (idUser, idProduct, priceProduct) => async dispatch => {
		await fetch(`http://localhost:3001/user/${idUser}/cart`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ productId: idProduct, price: priceProduct }),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: 'ADD_PRODUCT_IN_CART',
					payload: data.products,
				})
			})
}


export const deleteProductInCart = (userId, idProduct) => async dispatch => {
      		await fetch(`http://localhost:3001/user/${userId}/cart`, {
      			method: 'DELETE',
      			credentials: 'include',
      			headers: {
      				Accept: 'application/json',
      				'Content-Type': 'application/json',
      			},
      			body: JSON.stringify({ productId: idProduct }),
      		})
      			.then((res) => res.json())
      			.then((product) => {
      				dispatch({
      					type: 'DELETE_PRODUCT_CART',
      					payload: product.productId,
      				})
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

export function getProductsCart() {
  return function (dispatch) {
    return fetch(`http://localhost:3002/user/cart`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((order) => {
        order.error || order.length === 0
          ? dispatch({
              type: 'GET_PRODUCTS_IN_CART',
              payload: [],
            })
          : dispatch({
              type: 'GET_PRODUCTS_IN_CART',
              payload: order[0].products,
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
