import { API } from "../../config"
import { ADD_TO_CART } from "../constants/cartConstants"
import axios from 'axios'

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
 let {data} = await axios.get(`${API}/productdetails/${id}`)

 dispatch({
    type: ADD_TO_CART,
    payload: {
        product: data._id,
        name: data.product_name,
        price: data.product_price,
        count_in_stock: data.count_in_stock,
        image: data.product_image,
        quantity 
    }
 })
 localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
}