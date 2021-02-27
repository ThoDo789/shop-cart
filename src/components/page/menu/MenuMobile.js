import React from 'react';
import {Link} from "react-router-dom";
import './menu.css'
import SearchMobile from "../../feature/seacrh/SearchMobile";
import {useDispatch, useSelector} from "react-redux";
import {hideMenu} from "../../../store/actions/ActionProcduct";

const MenuMobile = () => {

   const {showHide}=useSelector(state=>state.ProductReducer)

        const dispatch= useDispatch()
    const hide=()=>{

         console.log(dispatch(hideMenu()))
    }


    return (

            <div className={ (showHide===false?"menu d-sm-block d-lg-none d-md-block  menu-open":"menu")} id="hidden" >
                <SearchMobile/>

                <ul className="menu__list"  onClick={hide}>
                    <li className="menu__item "><Link exact={"true"} to="/" className="menu__link" >Home</Link></li>
                    <li className="menu__item"><Link  to="/contact" className="menu__link" >Contact</Link></li>
                    <li className="menu__item"><Link  to="/register" className="menu__link" >Register</Link></li>
                    <li className="menu__item"><Link  to="/admin" className="menu__link" >Admin</Link></li>

                </ul>
            </div>


    );
};

export default MenuMobile;