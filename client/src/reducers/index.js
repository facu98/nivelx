const initialState = {

  products: [],
  categories: [],
  users: [],
  user:[],
  cart:[],
  orders:[]


};

function rootReducer(state = initialState, action) {
  switch (action.type) {
  	case 'GET_PRODUCTS':
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
      user: action.payload
    }



  default:

  return state
}
}

export default rootReducer;
