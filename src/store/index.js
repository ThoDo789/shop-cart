import {createStore,combineReducers} from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";
const root= combineReducers({
    ProductReducer,
    CartReducer
})
const store =createStore(root,devToolsEnhancer())
export default store