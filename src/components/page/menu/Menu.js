import React,{useState} from 'react';
import {NavLink,Link} from "react-router-dom";
import './menu.css'
import {useSelector} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/all";



const Menu = (props) => {
const {themes} = useSelector(state=>state.ProductReducer)


    return (
        <div className="menu pc row"  >
            <ul className="menu__list pc col-lg-12" style={themes}>
                <li className="menu__item pc "><NavLink exact to="/" className="menu__link pc" activeClassName="active">Home</NavLink></li>
                <li className="menu__item pc"><NavLink to="/contact" className="menu__link pc">Contact</NavLink></li>
                <li className="menu__item pc"><NavLink to="/register" className="menu__link pc">Register</NavLink></li>
                <li className="menu__item pc"><NavLink to="/admin" className="menu__link pc">Admin</NavLink></li>
            </ul>
        </div>


    );
};

export default Menu;