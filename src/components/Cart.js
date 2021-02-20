import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import emptyImg from "../images/bag-is-empty.svg"
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus, BsXSquare} from "react-icons/all";
import {decrementQuantity, incrementQuantity,removeItemCart} from "../store/actions/ActionCart";

const Cart = () => {
    const {products, totalQuantities,totalPrice} = useSelector(state => state.CartReducer)
    console.log(products)
    const dispatch=useDispatch()


    return (
        <div className="cart">
            <div className="container">
                <h3>your cart</h3>

                {products.length > 0 ?
                    <> <span className="qty-title">your cart have {totalQuantities} products</span>
                        <div className="row">
                            <div className="col-9">
                                <div className="cart__heading">
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
                                        <div className="col-2">
                                            <div className="cart__image">
                                                <img src={`/images/${product.image}`} alt="image"/>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="car__name">
                                                {product.name}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="car__price">
                                                {currencyFormatter.format(product.discountPrice  , {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="detail__info">
                                                <div className="detail__incDec">
                                                    <span className="dec icon" onClick={()=>{dispatch(decrementQuantity(product.id))}}><BsDash/></span>
                                                    <span className="quantity">{product.quantity}</span>
                                                    <span className="inc" onClick={()=>{dispatch(incrementQuantity(product.id))}}><BsPlus/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="car__total">
                                                {currencyFormatter.format( product.discountPrice*product.quantity , {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="cart__remove" onClick={()=>dispatch(removeItemCart(product.id))}>
                                                <BsXSquare/>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-3">
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