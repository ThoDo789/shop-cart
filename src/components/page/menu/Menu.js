import React,{useState} from 'react';
import {Link,NavLink} from "react-router-dom";
import './menu.css'
import {IoMdClose} from "react-icons/all";
import {useSelector} from "react-redux";

const Menu = () => {
    const {showHide} =useSelector(state=>state.ProductReducer)

    console.log(showHide)

    return (
                    <div className={showHide===false? "menu" :"menu menu-open"} >

                        <ul className="menu__list" >
                            <li className="menu__item"><NavLink to="/" className="menu__link">Home</NavLink></li>
                            <li className="menu__item"><NavLink to="/" className="menu__link">Contact</NavLink></li>
                            <li className="menu__item"><NavLink to="/" className="menu__link">Register</NavLink></li>
                            <li className="menu__item"><NavLink to="/admin" className="menu__link">Admin</NavLink></li>
                        </ul>
                    </div>



    );
};

export default Menu;