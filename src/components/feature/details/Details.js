import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/all";
import {productList} from "../../../store/actions/ActionProcduct";
import {addToCart} from "../../../store/actions/ActionCart";
import './details.css'
const Details = () => {
        const [quantity, setQuantity] = useState(1)
        const {id} = useParams()
        const {product,themes} = useSelector(state => state.ProductReducer)
        console.log(product)
        const dispatch = useDispatch()
        useEffect(() => {
            const action = productList(id)
            dispatch(action)
        }, [id])

        const decQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1)
            }
        }
        const onAddToCart = () => {
        dispatch(addToCart(product, quantity))
        }

        return (
            <div className="container-fluid " style={themes}>
                <div className="container detail" >
                    <div className="row">
                        <div className=" detail__img col-lg-6 col-md-6 col-sm-12">
                            <div className="detail__image mt-10">
                                <img src={`/images/${product.image}`} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                            <div className="detail__name mt-10 ">{product.name}</div>
                            <div className="detail__price ">
                                <span className="detail__actual">{currencyFormatter.format(product.price, {code: 'USD'})}</span>
                                <span
                                    className="detail__discount">   {currencyFormatter.format((product.price - product.discount/100 * product.price), {code: 'USD'})}</span>
                            </div>
                            <div className="detail__info row">
                                <div className="detail__incDec col-lg-6 col-md-6 col-sm-12">
                                    <span className="dec" onClick={decQuantity}><BsDash/></span>
                                    <span className="quantity">{quantity}</span>
                                    <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus/></span>

                                </div>
                                <div className=" col-lg-6 col-md-6 col-sm-12">
                                    <button  className="btn-default" onClick={onAddToCart}>add to cart
                                    </button>
                                </div>

                                <div className="detail__desc col-12 text-left">
                                    <h4>Details</h4>
                                    <span className="detail__info">{product.desc}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
;

export default Details;