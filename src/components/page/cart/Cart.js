import React from 'react';
import {useSelector} from "react-redux";
import '../../page/cart/cart.css'
import CartList from "../../feature/cart-list/CartList";

const Cart = () => {

     const  {themes} = useSelector(state=>state.ProductReducer)

    return (
        <div className="cart" style={themes}>
            <div className="container">
                <h3>your cart</h3>
                <CartList/>
            </div>
        </div>
    );
};

export default Cart;