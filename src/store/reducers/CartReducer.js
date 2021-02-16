const initialState ={
    products:[],
    totalPrice:0,
    totalQuantities:0,
}
const  CartReducer=(state=initialState,action)=>{
    switch (action.type){

        case 'ADD_TO_CART':



            const {product,quantity}= action.payload
            console.log(typeof  product.id)
            const check=state.products.find(pr=>pr.id===product.id)
            if(check){
                return state
            }else {
                const tPrice = state.totalPrice + product.discountPrice * quantity
               const tQuantities = state.totalQuantities + quantity
                // product.quantity=quantity
                return {
                    ...state,
                    products: [...state.products,product],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities

                }
            }

        default:
            return state
    }
}
export default CartReducer