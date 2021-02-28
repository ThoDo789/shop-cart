import React, {useMemo, useRef} from 'react';
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {useHistory} from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css';
import Sort from "../sort/Sort";

const ProductList = () => {
    AOS.init()

    const {products, key} = useSelector(state => state.ProductReducer)

    const productList = useMemo(() => {
        if (!key) return products
        console.log(products)

        return products.filter(pr => {
            return (pr.name.includes(key.toLowerCase()) || pr.name.includes(key.toLowerCase()))
        })
    }, [key, products])

    const history = useHistory()
    const onNextDetail = (id) => {

        window.scroll(0, 0)
        history.push(`/detail/${id}`)
    }


    return (
        <div className="container mtb-30">
            {productList.length <= 0 ? '' : <Sort/>}
            <div className="row">
                {productList.length <= 0 ?
                    <span className="not-found">do not found product</span> : productList.map(product => (
                        <div className="col-lg-3 col-md-6 col-sm-6" id="el" key={product.id}>

                            <div className="product row">
                                <div className="product__img col-12 " data-aos="fade-up" data-aos-delay="50">

                                    <img src={`/images/${product.image}`}
                                         alt="image name"
                                         onClick={() => onNextDetail(product.id)}/>

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
                                                <span
                                                    className="product__discount--percent">{product.discount}%</span>
                                            </div>
                                            <div className="product__discount--price">
                                                {currencyFormatter.format((product.price - product.discount / 100 * product.price), {code: 'USD'})}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    );
};

export default ProductList;