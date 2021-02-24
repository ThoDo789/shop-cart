import {ADD_TO_CART, DECREMENT, INCREMENT, REMOVE} from "../../types";

export const addToCart = (product,quantity) => {
    return {
        type:ADD_TO_CART,
        payload:{product,quantity}
    }
}
export const incrementQuantity = (id) => {
    return {
        type:INCREMENT,
        payload:id
    }
}
export const decrementQuantity = (id) => {
    return {
        type:DECREMENT,
        payload:id
    }
}
export const removeItemCart = (id) => {
    return {
        type:REMOVE,
        payload:id
    }
}