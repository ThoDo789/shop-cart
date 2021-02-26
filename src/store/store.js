import {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/UserReducer";
import thunk from "redux-thunk";


const middleware = [thunk]

const root= combineReducers({
    ProductReducer,
    CartReducer,
    userReducer
})
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store =createStore(root,loadFromLocalStorage(),composeWithDevTools(applyMiddleware(...middleware)))
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store