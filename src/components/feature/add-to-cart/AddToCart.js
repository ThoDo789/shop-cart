import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {BsDash, BsPlus} from "react-icons/all";
import {productList} from "../../../store/actions/ActionProcduct";
import {addToCart} from "../../../store/actions/ActionCart";

const AddToCart = () => {

    const [quantity, setQuantity] = useState(1)

    const {id} = useParams()

    const {product} = useSelector(state => state.ProductReducer)

    const history = useHistory()
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
        history.push("/cart")
    }


    return (
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
    );
};

export default AddToCart;