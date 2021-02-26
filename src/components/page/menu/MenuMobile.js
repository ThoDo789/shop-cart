import React,{useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './menu.css'
import SearchMobile from "../../feature/seacrh/SearchMobile";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Register from "../register/Register";
import Admin from "../admin/Admin";

const MenuMobile = (props) => {
    const {showHide}=props





    return (

            <div className={ (showHide===true?"menu d-sm-block d-lg-none d-md-block  menu-open":"menu")} id="hidden">
                <SearchMobile/>

                <ul className="menu__list" >
                    <li className="menu__item "><Link exact={"true"} to="/" className="menu__link" >Home</Link></li>
                    <li className="menu__item"><Link  to="/contact" className="menu__link" >Contact</Link></li>
                    <li className="menu__item"><Link  to="/register" className="menu__link" >Register</Link></li>
                    <li className="menu__item"><Link  to="/admin" className="menu__link" >Admin</Link></li>

                </ul>
            </div>


    );
};

export default MenuMobile;