import React, {useEffect, useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link, useHistory} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import './nav.css'
import Search from "../../feature/seacrh/Search";
import DarkLightThemes from "../../feature/darkmode/DarkLightThemes";
import MenuMobile from "../menu/MenuMobile";
import Menu from "../menu/Menu";


const Nav = () => {

    const {totalQuantities} = useSelector(state => state.CartReducer)
    const {themes} = useSelector(state => state.ProductReducer)
    const [trigger, setTrigger] = useState(false)
    const history = useHistory()

    const backHome = () => {
        window.scroll(0, 0)
        history.push('/')
    }
    const onMenuMobile = () => {
        setTrigger(!trigger)

    }

    return (
        <div className="navbar container-fluid" style={themes}>

            <div className="nav__container row">



                <div className="nav__left">
                    <button className="btn-home" onClick={backHome} type="button"><img src="/images/logo.webp" alt=""/>
                    </button>
                </div>

                    <DarkLightThemes/>
                    <Search/>


                <div className="nav__right">
                    <Link to="/cart" className=" pc">
                        <div className="basket">
                            <AiOutlineShoppingCart size='30' className="cart-icon"/>
                            <span>{totalQuantities}</span>
                        </div>
                    </Link>

                </div>
                <Menu/>

                <div className="menu-nav">
                    <div id="nav-icon1" onClick={onMenuMobile}
                         className={trigger === true ? 'open d-lg-none d-md-block d-sm-block' : 'd-lg-none d-md-block d-sm-block'}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                    <MenuMobile showHide={trigger}/>
                </div>


            </div>

        </div>
    );
};

export default Nav;