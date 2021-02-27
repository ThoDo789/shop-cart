import React from 'react';
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import './details.css'
import AddToCart from "../../feature/add-to-cart/AddToCart";

const Details = () => {

        const {product,themes} = useSelector(state => state.ProductReducer)

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
                                <span className="detail__actual">
                                    {currencyFormatter.format(product.price, {code: 'USD'})}
                                </span>
                                <span className="detail__discount">
                                    {currencyFormatter.format((product.price - product.discount/100 * product.price), {code: 'USD'})}
                                </span>
                            </div>
                            <AddToCart/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
;

export default Details;