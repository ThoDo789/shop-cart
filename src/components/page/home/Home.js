import React from 'react';
import Header from "../header/Header";
import {useSelector} from "react-redux";
import './home.css'
import 'aos/dist/aos.css';
import ProductList from "../../feature/product-list/ProductList";

const Home = (props) => {
    const {key} =props
    console.log(key)
    const {themes} = useSelector(state => state.ProductReducer)
    return (
        <div  style={themes}>
            <Header/>
            <ProductList/>
        </div>
    );
};

export default Home;