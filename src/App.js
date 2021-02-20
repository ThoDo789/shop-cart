import React, {Suspense} from "react"
import './App.css';
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import store from "./store";
import Loading from "./components/Loading";


function App() {
    const Nav = React.lazy(() => import('./components/Nav'));
    const Home = React.lazy(() => import('./components/Home'));
    const Cart = React.lazy(() => import('./components/Cart'));
    const Details = React.lazy(() => import('./components/Details'));
    const User = React.lazy(() => import('./components/User'));
    const PageNotFound = React.lazy(() => import('./components/PageNotFound'));
    return (
        <Router className="App">
            <Suspense fallback={<Loading/>}>
            <Provider store={store}>

                    <Nav/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/detail/:id" exact component={Details}/>
                        <Route path="/user" exact component={User}/>
                        <Route component={PageNotFound}/>
                    </Switch>
            </Provider>
            </Suspense>
        </Router>
    );
}

export default App;
