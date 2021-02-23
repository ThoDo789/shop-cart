import React, {useMemo} from 'react';
import Header from "../header/Header";
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {useHistory} from "react-router-dom";
import './home.css'
import AOS from "aos"
import 'aos/dist/aos.css';

const Home = () => {

    AOS.init()

    const {products, key,themes} = useSelector(state => state.ProductReducer)

    const productList =products.filter(pr => {

        return pr.name.includes(key.toLowerCase())
    })

    const history= useHistory()
const onNextDetail=(id)=>{
        console.log(id)
    window.scroll(0,0)
    history.push(`/detail/${id}`)
}
    return (
        <div style={themes}>
            <Header/>
            <div className="container mtb-30">
                <div className="row">
                    {productList.length <= 0 ? <span className="not-found">do not found product</span> : productList.map(product => (
                        <div className="col-lg-3 col-md-6 col-sm-6" id="el" key={product.id}>
                            <div className="product row">
                                <div className="product__img col-12 " data-aos="fade-up" data-aos-delay="50">
                                    <div onClick={()=>onNextDetail(product.id)}>
                                        <img src={`/images/${product.image}`} alt="image name"/>
                                    </div>
                                </div>
                                <div className="product__name col-12" data-aos="fade-up" data-aos-delay="10">
                                    {product.name}
                                </div>
                                <div className="col-12" data-aos="fade-up" data-aos-delay="10">
                                    <div className="row">
                                        <div className="col-12 price">
                                            <div className="product__price">
                                                <div className="actual-price">
                                                    {currencyFormatter.format(product.price, {code: 'USD'})}
                                                </div>
                                                <span className="product__discount--percent">{product.discount}%</span>

                                            </div>
                                            <div className="product__discount--price">
                                                {currencyFormatter.format(product.discountPrice, {code: 'USD'})}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Home;