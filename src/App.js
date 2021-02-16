import React from "react"
import './App.css';
import {Provider} from "react-redux"
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";

import store from "./store";

function App() {
  return (
      <Router className="App">
<Provider store={store}>
    <Nav/>
    <Route path="/" exact component={Home}/>
    <Route path="/cart" exact component={Cart}/>
    <Route path="/detail/:id" exact component={Details}/>

</Provider>
      </Router>
  );
}

export default App;
