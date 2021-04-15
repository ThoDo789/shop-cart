import React, {Suspense} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/store";
import {Provider} from "react-redux"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Loading from "./components/page/loading/Loading";
import Footer from "./components/page/footer/Footer";
import Map from "./components/page/map/Map";



const Nav = React.lazy(() => import('./components/page/nav/Nav'));
const Home = React.lazy(() => import('./components/page/home/Home'));
const Cart = React.lazy(() => import('./components/page/cart/Cart'));
const Details = React.lazy(() => import('./components/page/details/Details'));
const UserList = React.lazy(() => import( "./components/admin/user/UserList"));
const PageNotFound = React.lazy(() => import('./components/page/page-not-found/PageNotFound'));
const Contact = React.lazy(() => import('./components/page/contact/Contact'));
const Register = React.lazy(() => import('./components/page/register/Register'));
const Login = React.lazy(() => import('./components/Login/Login'));

function App() {
    return (

        <Router className="App">
            <Suspense fallback={<Loading/>}>
                <Provider store={store}>
                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/detail/:id" exact component={Details}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                        <Router path="/user" component={UserList}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                    <Map/>
                    <Footer/>
                </Provider>
            </Suspense>
        </Router>
    );
}

export default App;
