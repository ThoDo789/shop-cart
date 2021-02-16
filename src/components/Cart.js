import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import emptyImg from "../images/bag-is-empty.svg"
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus, BsXSquare} from "react-icons/all";

const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    const {products, totalQuantities} = useSelector(state => state.CartReducer)
    console.log(products)
    // const dispatch=useDispatch()
    // const decQuantity=()=>{
    //     if(quantity>1){
    //         setQuantity(quantity-1)
    //     }
    // }

    return (
        <div className="cart">
            <div className="container">
                <h3>your cart</h3>

                {products.length > 0 ?
                    <> <span>your cart have {totalQuantities} products</span>
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
                                                {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="detail__info">
                                                <div className="detail__incDec">
                                                    <span className="dec icon"><BsDash/></span>
                                                    <span className="quantity">{product.quantity}</span>
                                                    <span className="inc"><BsPlus/></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="car__total">
                                                {currencyFormatter.format(product.discountPrice * product.quantity, {code: 'USD'})}
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="car__remove">
                                                <BsXSquare/>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-3">
                                    summery
                            </div>

                        </div>
                    </> :
                    <div className="cart-empty">
                        <span className="empty-cart__title">your cart empty</span>
                        <img src={emptyImg} alt="tyty" className="empty-cart__img"/>
                    </div>}

            </div>
        </div>
    );
};

export default Cart;