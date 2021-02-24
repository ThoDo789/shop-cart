import React, {useEffect, useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/all";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './nav.css'
import Search from "../../feature/seacrh/Search";
import DarkLightThemes from "../../feature/darkmode/DarkLightThemes";
import Menu from "../menu/Menu";
import {status} from "../../../store/actions/ActionProcduct";

const Nav = () => {

    const{totalQuantities} = useSelector(state=>state.CartReducer)
    const{themes} =useSelector(state=>state.ProductReducer)
    const [trigger,setTrigger] = useState(false)
    const history= useHistory()
    const dispatch =useDispatch()
    const backHome =()=>{
        window.scroll(0,0)
        history.push('/')
    }
    const onMenuMobile =()=>{
        setTrigger(!trigger)

    }
    useEffect(()=>{
        console.log(dispatch(status(trigger)))
    },[trigger])
    return (
        <div className="navbar container-fluid" style={themes}>

                <div className="nav__container row">
                    <div className="nav__left">
                       <button className="btn-home" onClick={backHome} type="button"><img src="/images/logo.webp" alt=""/></button>
                    </div>
                    <Search />
                    <DarkLightThemes/>
                    <div className="nav__right">
                      <Link to="/cart" className=" pc">
                          <div className="basket">
                              <AiOutlineShoppingCart size='30' className="cart-icon"/>
                              <span>{totalQuantities}</span>
                          </div>
                      </Link>


                    </div>
                    <div id="nav-icon1" onClick={onMenuMobile} className={trigger===true?'open d-lg-none d-md-none d-sm-block':'d-lg-none d-md-none d-sm-block'}>
                        <span></span>
                        <span></span>
                        <span></span>



                    </div>

                </div>

        </div>
    );
};

export default Nav;