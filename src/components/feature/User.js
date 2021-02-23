import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getUser} from "../../store/actions/ActionUser";

import {Link} from "react-router-dom";
import currencyFormatter from "currency-formatter";

const User = () => {
    const dispatch = useDispatch()
    const {loading, users, error} = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <div style={{paddingTop: "100px"}}>
            {loading ? "Loading..." : error ? error.message :
                <div className="container mtb-30">
                    <div className="row">
                        {users.map((users, k) => <div className="col-3" key={k}>
                            <div className="product">
                                <div className="product__img">
                                    <Link to={`/detail/${users.id}`}>
                                        <img src={`/images/${users.image}`} alt="image name"/>
                                    </Link>
                                </div>
                                <div className="product__name">
                                    {users.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <div className="actual-price">
                                                {currencyFormatter.format(users.price, {code: 'USD'})}
                                            </div>
                                            <span className="product__discount--percent">
                                              {users.discount}%
                                          </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount--price">
                                            {currencyFormatter.format((users.price-(users.price/100*users.price)), { code: 'USD' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}


                    </div>
                </div>}
        </div>
    );
};

export default User;