import React from 'react';
import {NavLink} from "react-router-dom";
import './menu.css'
import {useSelector} from "react-redux";


const Menu = (props) => {
const {themes} = useSelector(state=>state.ProductReducer)


    return (
        <div className="menu pc row"  >
            <ul className="menu__list pc col-lg-12" style={themes}>
                <li className="menu__item pc "><NavLink exact to="/" className="menu__link pc" activeClassName="active">Home</NavLink></li>
                <li className="menu__item pc"><NavLink to="/contact" className="menu__link pc">Contact</NavLink></li>
                <li className="menu__item pc"><NavLink to="/login" className="menu__link pc">Login</NavLink></li>
            </ul>
        </div>


    );
};

export default Menu;