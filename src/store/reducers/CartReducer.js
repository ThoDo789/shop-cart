const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
}

const CartReducer = (state = initialState, action) => {

    let findProduct;
    let index;

    switch (action.type) {

        case 'ADD_TO_CART':

            const {product, quantity} = action.payload
            console.log(typeof product.id)

            const check = state.products.find(pr => pr.id === product.id)

            if (check) {

                return state

            } else {

                const tPrice = state.totalPrice + product.discountPrice * quantity
                const tQuantities = state.totalQuantities + quantity
                product.quantity = quantity // update quantity

                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities

                }
            }
        case 'INCREMENT':

            findProduct = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            findProduct.quantity += 1;
            state.products[index] = findProduct;

            return {
                ...state,
                totalPrice: state.totalPrice + findProduct.discountPrice,
                totalQuantities: state.totalQuantities + 1
            }

        case 'DECREMENT':

            findProduct = state.products.find(product => product.id === action.payload)
            index = state.products.findIndex(product => product.id === action.payload)
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
            }
            else {

                return state
            }

            return {

                ...state,
                totalPrice: state.totalPrice - findProduct.discountPrice,
                totalQuantities: state.totalQuantities - 1

            }

        case 'REMOVE':

            findProduct = state.products.find(product => product.id === action.payload)
            const filterProduct = state.products.filter(product => product.id !== action.payload)

            return {

                ...state,
                products: filterProduct,
                totalPrice: state.totalPrice - findProduct.discountPrice * findProduct.quantity,
                totalQuantities: state.totalQuantities - findProduct.quantity
            }

        default:
            return state
    }
}
export default CartReducer