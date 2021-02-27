import React, {Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import emptyImg from "../../../images/bag-is-empty.svg"
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus, BsXSquare} from "react-icons/all";
import {decrementQuantity, incrementQuantity, removeItemCart} from "../../../store/actions/ActionCart";

const CartList = () => {
    const {products, totalQuantities, totalPrice} = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    return (
        <Fragment>
            {products.length > 0 ?
                <> <span className="qty-title row"><span
                    className="col-12">your cart have {totalQuantities} products</span></span>
                    <div className="row">
                        <div className="col-lg-9 col-md-6 col-sm-12">
                            <div className="cart__heading d-md-none d-sm-none d-lg-block">
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
                                    <div className="col-lg-2 col-md-12 col-sm-12">
                                        <div className="cart__image">
                                            <img src={`/images/${product.image}`} alt="image"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12 col-sm-12">
                                        <div className="car__name pt-md-2">
                                            {product.name}
                                        </div>
                                    </div>
                                    <div className=" pt-md-3 col-lg-2 col-md-4 col-sm-12">
                                        <div className="car__price">
                                            {currencyFormatter.format((product.price - product.discount / 100 * product.price), {code: 'USD'})}
                                        </div>
                                    </div>
                                    <div className=" pt-md-3 col-lg-2 col-md-4 col-sm-12">
                                        <div className="row">
                                            <div className="detail__info col-12 ">
                                                <div className="detail__incDec">
                                                    <span className="dec icon" onClick={() => {
                                                        dispatch(decrementQuantity(product.id))
                                                    }}><BsDash/></span>
                                                    <span className="quantity">{product.quantity}</span>
                                                    <span className="inc" onClick={() => {
                                                        dispatch(incrementQuantity(product.id))
                                                    }}><BsPlus/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" pt-md-3 col-lg-2 col-md-4 col-sm-12">
                                        <div className="car__total">
                                            {currencyFormatter.format((product.price - product.discount / 100 * product.price) * product.quantity, {code: 'USD'})}
                                        </div>
                                    </div>
                                    <div className=" pt-md-2 col-lg-2 col-md-12 col-sm-12 d-block d-sm-none d-md-block">
                                        <div className="cart__remove"
                                             onClick={() => dispatch(removeItemCart(product.id))}>
                                            <BsXSquare/>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="summery row">
                                <div className="summary__heading col-lg-8 col-md-8">
                                    Summary
                                </div>
                                <div className="summary__details col-lg-8 col-md-8 col-sm-12">
                                        <div className="row">
                                            <div className="col-12 total">
                                               <span> Total items:</span>
                                                <span>{totalQuantities}</span>
                                            </div>

                                            <div className="col-12 total">
                                               <span>Total price:</span>
                                                <span>{currencyFormatter.format(totalPrice, {code: 'USD'})}</span>
                                            </div>

                                            <div className="col-12">
                                                <button type="button" className="checkout">Checkout</button>
                                            </div>
                                        </div>




                                </div>
                            </div>
                        </div>

                    </div>
                </> :
                <div className="cart-empty">
                    <span className="empty-cart__title">your cart empty</span>
                    <img src={emptyImg} alt="img" className="empty-cart__img"/>
                </div>}
        </Fragment>
    );
};

export default CartList;