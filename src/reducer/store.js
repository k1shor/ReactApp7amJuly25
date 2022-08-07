import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";



const rootReducer = combineReducers({
    cart: cartReducer,
})

const initialState = {
    cart: {
        cart_items: localStorage.getItem('cart_items')?JSON.parse(localStorage.getItem('cart_items')):[]
    }
}

const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store