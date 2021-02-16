import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Nav = () => {
    const{totalQuantities} = useSelector(state=>state.CartReducer)
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                       <Link to="/"><img src="/images/logo.webp" alt=""/></Link>
                    </div>
                    <div className="nav__right">
                      <Link to="/cart">
                          <div className="basket">
                              <AiOutlineShoppingCart size='30' className="cart-icon"/>
                              <span>{totalQuantities}</span>
                          </div>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;