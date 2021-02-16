import React from 'react';
import Header from "./Header";
import {useSelector} from "react-redux";
import currencyFormatter from "currency-formatter";
import {Link} from "react-router-dom";
const Home = () => {
    const {products} =useSelector(state=>state.ProductReducer)
    console.log(products)
    return (
        <div>
            <Header/>
          <div className="container mtb-30">
              <div className="row">
                  {products.map(product=>(
                      <div className="col-3" key={product.id}>
                          <div className="product">
                              <div className="product__img">
                                  <Link to={`/detail/${product.id}`}>
                                      <img src={`/images/${product.image}`} alt="image name"/>
                                  </Link>
                              </div>
                              <div className="product__name">
                                  {product.name}
                              </div>
                              <div className="row">
                                  <div className="col-6">
                                      <div className="product__price">
                                          <div className="actual-price">
                                              {currencyFormatter.format(product.price, { code: 'USD' })}

                                          </div>
                                          <span className="product__discount--percent">
                                              {product.discount}%
                                          </span>
                                      </div>
                                  </div>
                                  <div className="col-6">
                                      <div className="product__discount--price">
                                          {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
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