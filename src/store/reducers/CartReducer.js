import {ADD_TO_CART, DECREMENT, INCREMENT, REMOVE} from "../../types";

const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,

}

const CartReducer = (state = initialState, action) => {

    let findProduct;
    let index;
    let dcp
    switch (action.type) {

        case ADD_TO_CART:

            const {product, quantity} = action.payload

            console.log(typeof product.id)

            const check = state.products.find(pr => pr.id === product.id)

            if (check) {

                return state

            } else {
                dcp =(product.price - product.discount/100 * product.price)
                const tPrice = state.totalPrice + dcp * quantity
                const tQuantities = state.totalQuantities + quantity
                product.quantity = quantity // update quantity

                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities,

                }
            }
        case INCREMENT:

            findProduct = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            dcp =(findProduct.price - findProduct.discount/100 * findProduct.price)
            return {
                ...state,
                totalPrice: state.totalPrice + dcp,
                totalQuantities: state.totalQuantities + 1,

            }

        case DECREMENT:

            findProduct = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            dcp =(findProduct.price - findProduct.discount/100 * findProduct.price)

            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
            }
            else {

                return state
            }

            return {

                ...state,
                totalPrice: state.totalPrice - dcp,
                totalQuantities: state.totalQuantities - 1,


            }

        case REMOVE:

            findProduct = state.products.find(product => product.id === action.payload)
            const filterProduct = state.products.filter(product => product.id !== action.payload)
            dcp =(findProduct.price - findProduct.discount/100 * findProduct.price)
            return {

                ...state,
                products: filterProduct,
                totalPrice: state.totalPrice - dcp * findProduct.quantity,
                totalQuantities: state.totalQuantities - findProduct.quantity,

            }

        default:
            return state
    }
}
export default CartReducer