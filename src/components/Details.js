import React,{useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux";
const Details = () => {
    const {id}= useParams()
    const{product}=useSelector(state=>state.ProductReducer)
    console.log(product)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch({type:'PRODUCT',id})
    },[id])
    console.log(id)
    return (
        <div>
            <h1>Details</h1>
        </div>
    );
};

export default Details;