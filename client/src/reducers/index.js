const localUser = localStorage.getItem("user")
const user = localUser && JSON.parse(localUser)

const guestCart = localStorage.setItem("guest", [])


const initialState = {

  products: [],
  categories: [],
  users: [],
  user: {},
  cart:[],
  orders:[],
  quantity: 0,
  guestCart: []

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
    return {
      ...state,
      guestCart:[...state.guestCart, action.payload]
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
