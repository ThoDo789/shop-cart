import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './nav.css'
import Search from "../../feature/seacrh/Search";
import DarkLightThemes from "../../feature/darkmode/DarkLightThemes";
import MenuMobile from "../menu/MenuMobile";
import Menu from "../menu/Menu";
import {showHideMenu} from "../../../store/actions/ActionProcduct";


const Nav = () => {


    const {totalQuantities} = useSelector(state => state.CartReducer)
    const {themes, showHide} = useSelector(state => state.ProductReducer)

    const history = useHistory()

    const backHome = () => {
        window.scroll(0, 0)
        history.push('/')
    }
    const dispatch = useDispatch()
    const onMenuMobile = () => {

        console.log(dispatch(showHideMenu()))
    }
    const keySearch = (key) => {
        keySearch(key)
    }
    return (
        <div className="navbar container-fluid" style={themes}>

            <div className="nav__container">

                <div className="nav__left">
                    <button className="btn-home" onClick={backHome} type="button"><img src="/images/store-location-logo.svg" alt=""/>
                    </button>
                </div>

                <DarkLightThemes/>
                <Search keySearch={keySearch}/>


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
                         className={showHide === false ? 'open d-lg-none d-md-block d-sm-block' : 'd-lg-none d-md-block d-sm-block'}>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>
                    <MenuMobile/>
                </div>


            </div>

        </div>
    );
};

export default Nav;