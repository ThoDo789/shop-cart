import React, {Suspense} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/store";
import {Provider} from  "react-redux"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Loading from "./components/page/loading/Loading";
import Footer from "./components/page/footer/Footer";
import Menu from "./components/page/menu/Menu";
function App() {
    const Nav = React.lazy(() => import('./components/page/nav/Nav'));
    const Home = React.lazy(() => import('./components/page/home/Home'));
    const Cart = React.lazy(() => import('./components/feature/cart/Cart'));
    const Details = React.lazy(() => import('./components/feature/details/Details'));
    const User = React.lazy(() => import('./components/feature/User'));
    const PageNotFound = React.lazy(() => import('./components/page/page-not-found/PageNotFound'));


    return (

        <Router className="App">
            <Suspense fallback={<Loading/>}>
                <Provider store={store}>

                    <Nav/>
                    <Menu/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/detail/:id" exact component={Details}/>
                        <Route path="/user" exact component={User}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                    <Footer/>
                </Provider>
            </Suspense>
        </Router>

    );
}

export default App;
