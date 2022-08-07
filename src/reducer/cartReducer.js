import { ADD_TO_CART, REMOVE_ITEM } from "./constants/cartConstants"

const initialData = {
    cart_items: []
}

const cartReducer = (state=initialData, action) => {
    switch(action.type){
        case ADD_TO_CART:
            let item = action.payload
            const itemExists = state.cart_items.find(i=>i.product == item.product)
            if(itemExists){
                return state
            }
            else{
                return {cart_items: [...state.cart_items, item]}
            }
                
        case REMOVE_ITEM:
            return state

        default:
            return state
    }
}

export default cartReducer