import React,{useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from "react-icons/all";
const Details = () => {
    const [quantity,setQuantity]=useState(1)
    const {id}= useParams()
    const{product}=useSelector(state=>state.ProductReducer)
    console.log(product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({type:'PRODUCT',id})
    },[id])
    console.log(id)
    const decQuantity=()=>{
        if(quantity>1){
            setQuantity(quantity-1)
        }
    }



    return (
        <div className="container">
           <div className="row">
               <div className="col-6">
                    <div className="detail__image mt-10">
                        <img src={`/images/${product.image}`} alt=""/>
                    </div>
               </div>
               <div className="col-6">
                    <div className="detail__name mt-10">{product.name}</div>
                   <div className="detail__price">
                       <span className="detail__actual">{currencyFormatter.format(product.price, { code: 'USD' })}</span>
                  <span className="detail__discount">   {currencyFormatter.format(product.discountPrice, { code: 'USD' })}</span>
                   </div>
                   <div className="detail__info">
                       <div className="detail__incDec">
                           <span className="dec" onClick={decQuantity}><BsDash/></span>
                           <span className="quantity">{quantity}</span>
                           <span className="inc" onClick={()=>setQuantity(quantity+1)}><BsPlus/></span>
                           <button className="btn-default" onClick={()=>{dispatch({type:'ADD_TO_CART',payload: {product, quantity}})}}>add to cart</button>
                       </div>
                        <div className="detail__desc">
                            <h4>Details</h4>
                            <span className="detail__info">{product.desc}</span>
                        </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Details;