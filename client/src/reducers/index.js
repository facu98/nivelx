const localUser = localStorage.getItem("user")
const user = localUser && JSON.parse(localUser)

const guest = localStorage.getItem("guest") && JSON.parse(localStorage.getItem("guest"))


const initialState = {

  products: [],
  categories: [],
  users: [],
  user: user ? user : [],
  cart:[],
  orders:[],
  quantity: 0,
  guestCart: guest ? guest : []

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
  	case 'GET_PRODUCTS':
  		return {
  			...state,
  			products: action.payload,
        }

    case 'GET_PRODUCTS_ID':
  		return {
  			...state,
  			products: action.payload,
  			}

    case 'GET_CATEGORY_PRODUCTS':
    return{
      ...state,
      products: action.payload
    }

    case 'GET_QUERY_PRODUCTS':
    return{
      ...state,
      products: action.payload
    }

    case 'GET_CATEGORIES':
    return{
      ...state,
      categories: action.payload
    }

    case 'GET_USERS':
    return{
      ...state,
      users: action.payload
    }

    case 'GET_USER_ID':
    return{
      ...state,
      user: action.payload
    }

    case 'CREATE_USER':
    return {
      ...state,

    }

    case 'ADD_PRODUCT_IN_CART':
    return {
      ...state
    }

    case 'GET_PRODUCTS_IN_CART':
    return {
      ...state,
      cart: action.payload
    }

    case 'DELETE_PRODUCT_CART':
    return{
      ...state
    }
    case 'GET_ORDERS':
    return{
      ...state,
      orders: action.payload
    }

    case 'GET_ORDER_ID':
    return{
      ...state,
      orders: [action.payload]

    }

    case 'LOGIN_USER':
    return {
      ...state,
      user: JSON.parse(localStorage.getItem("user")),
      guest: false


    }

    case 'LOGOUT_USER':
    return {
      ...state,
      user: [],
      guest:true
    }

    case 'RESET_PASSWORD':
			return {
				...state,
				users: action.payload,
			}
		case 'RESET':
			return {
				...state,
				reset: action.payload,
			}

    case 'GET_QUANTITY':
      return {
        ...state,
        quantity: action.payload
      }

    case 'PRODUCTS_PAGE':
    return {
      ...state,
      products: state.products.slice(action.payload * 12, action.payload * 12 + 12)
    }


    case 'ADD_PRODUCT_CART_GUEST':
    let products = []
    if(localStorage.getItem('guest')){
      products = JSON.parse(localStorage.getItem('guest'))
    }
    products.push(action.payload)
    localStorage.setItem('guest', JSON.stringify(products))

    return {
      ...state,
      guestCart: JSON.parse(localStorage.getItem('guest'))
    }

     case 'REMOVE_PRODUCT_CART_GUEST':
     localStorage.guest = JSON.stringify(action.payload)

     return {
       ...state,
       guestCart: JSON.parse(localStorage.getItem('guest'))
     }

     case 'CLEAR_GUESTCART':
     localStorage.removeItem('guest');
     return {
       ...state,
       guestCart: []
     }



    case 'IS_LOGGED':
    if(!action.logged){
      return{
        ...state,
         user : []
      }
    }



  default:

    return state
  }

}

export default rootReducer;
