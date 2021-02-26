import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Home from "../home/Home";
import Register from "../register/Register";
import Contact from "../contact/Contact";
import Admin from "../admin/Admin";

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className="menu__item">
            <Link to={to}   className={match ? "active menu__link" : "menu__link"} >{label}</Link>
        </li>
    );
}


const MenuList = () => {
    return (
        <Router>

            <ul className="menu__list">
                <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                <MenuLink  to="/contact" label="Contact"/>
                <MenuLink  to="/register" label="Register"/>
                <MenuLink  to="/admin" label="Admin"/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/register" component={Register}/>
                    <Route  path="/admin" component={Admin}/>
                </Switch>
            </ul>
        </Router>
    );
};

export default MenuList;