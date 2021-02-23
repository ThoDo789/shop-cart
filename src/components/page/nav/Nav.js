import React,{useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import './nav.css'
import Search from "../../feature/seacrh/Search";
import DarkLightThemes from "../../feature/darkmode/DarkLightThemes";

const Nav = () => {

    const{totalQuantities} = useSelector(state=>state.CartReducer)
    const{themes} =useSelector(state=>state.ProductReducer)
    const [trigger,setTrigger] = useState(false)
    const history= useHistory()
    const backHome =()=>{
        window.scroll(0,0)
        history.push('/')
    }
    const onMenuMobile =()=>{
        setTrigger(!trigger)
    }
    return (
        <div className="navbar container-fluid" style={themes}>

                <div className="nav__container">
                    <div className="nav__left">
                       <button className="btn-home" onClick={backHome} type="button"><img src="/images/logo.webp" alt=""/></button>
                    </div>
                    <Search/>
                    <DarkLightThemes/>
                    <div className="nav__right">
                      <Link to="/cart" className="tablet">
                          <div className="basket">
                              <AiOutlineShoppingCart size='30' className="cart-icon"/>
                              <span>{totalQuantities}</span>
                          </div>
                      </Link>
                        <div id="nav-icon1" onClick={onMenuMobile} className={trigger===true?'open mobile':'mobile'}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>

                </div>
        </div>
    );
};

export default Nav;