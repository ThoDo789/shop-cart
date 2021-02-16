import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link} from "react-router-dom";

const Nav = () => {
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
                              <span>4</span>
                          </div>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;