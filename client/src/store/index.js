import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { orderReducer } from "../reducers/orderReducers";

//fix


const store = createStore(combineReducers({
    order: orderReducer,
    rootReducer,
  }),

  compose(applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


export default store;
