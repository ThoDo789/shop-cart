import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import emptyImg from "../../../images/bag-is-empty.svg"
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus, BsXSquare} from "react-icons/all";
import {decrementQuantity, incrementQuantity,removeItemCart} from "../../../store/actions/ActionCart";
import './cart.css'
const Cart = () => {
    const {products, totalQuantities,totalPrice} = useSelector(state => state.CartReducer)
   const  {themes} = useSelector(state=>state.ProductReducer)
    const dispatch=useDispatch()


    return (
        <div className="cart" style={themes}>
            <div className="container">
                <h3>your cart</h3>

                {products.length > 0 ?
                    <> <span className="qty-title row"><span className="col-12">your cart have {totalQuantities} products</span></span>
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="cart__heading d-none d-sm-block">
                                    <div className="row">
                                        <div className="col-2">
                                            <p className="">Picture</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="">Name</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="">Price</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="">Inc/Dec</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="">Total</p>
                                        </div>
                                        <div className="col-2">
                                            <p className="">Remove</p>
                                        </div>
                                    </div>
                                </div>
                                {products.map(product => (
                                    <div className="row text" key={product.id}>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="cart__image">
                                                <img src={`/images/${product.image}`} alt="image"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="car__name">
                                                {product.name}
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="car__price">
                                                {currencyFormatter.format((product.price - product.discount/100 * product.price)  , {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="row">
                                                <div className="detail__info col-12 ">
                                                    <div className="detail__incDec">
                                                        <span className="dec icon" onClick={()=>{dispatch(decrementQuantity(product.id))}}><BsDash/></span>
                                                        <span className="quantity">{product.quantity}</span>
                                                        <span className="inc" onClick={()=>{dispatch(incrementQuantity(product.id))}}><BsPlus/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12">
                                            <div className="car__total">
                                                {currencyFormatter.format( (product.price - product.discount/100 * product.price)*product.quantity , {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-12 d-block d-sm-none d-md-block">
                                            <div className="cart__remove" onClick={()=>dispatch(removeItemCart(product.id))}>
                                                <BsXSquare/>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-lg-3 col-md-2 col-sm-12">
                                    <div className="summery">
                                        <div className="summary__heading">
                                            Summary
                                        </div>
                                        <div className="summary__details ">
                                            <div className="row">
                                                <div className="col-6">
                                                    Total items:
                                                </div>
                                                <div className="col-6">{totalQuantities}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    Total price:
                                                </div>
                                                <div className="col-6">
                                                    {currencyFormatter.format( totalPrice, {code: 'USD'})}

                                                </div>
                                            </div>
                                            <button type="button" className="checkout">Checkout</button>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    </> :
                    <div className="cart-empty">
                        <span className="empty-cart__title">your cart empty</span>
                        <img src={emptyImg} alt="img" className="empty-cart__img"/>
                    </div>}

            </div>
        </div>
    );
};

export default Cart;