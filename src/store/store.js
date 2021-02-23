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
const store =createStore(root,composeWithDevTools(applyMiddleware(...middleware)))
export default store