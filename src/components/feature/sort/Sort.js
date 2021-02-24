import React, {useState} from 'react';
import "./sort.css"
import {RiArrowDownSLine} from "react-icons/all"
import {useDispatch, useSelector} from "react-redux";
import {sortNameAZ, sortNameZA, sortPriceDec, sortPriceInc} from "../../../store/actions/ActionProcduct";

const Sort = () => {
    const {themes, products} = useSelector(state => state.ProductReducer)
    const dispatch =useDispatch()
    const [value, setValue] = useState('A-Z')
    const [active, setActive] = useState(true)


    const onHandleToggle = () => {
        setActive(!active)
    }

    const activeValue = ({value}) => {
        setValue(value)

        switch (value) {
            case "A-Z":
                return  dispatch(sortNameAZ())
            case "Z-A":
                return dispatch(sortNameZA())
            case "Price Increment":
                return dispatch(sortPriceInc())
            case "Price Decrement":
                return  dispatch(sortPriceDec())
            default:
                return {
                    ...products
                }
        }

    }
    return (
        <div className="row sort-wrapper ">
            <div className="col-6">
                <div className="row">
                    <div className="col-6 sort">
                        <h6 className="sort__title">Sort:</h6>
                        <div className="sort__menu" style={themes}>
                            <div className="sort__active-item" onClick={onHandleToggle}>
                                <span>{value}</span><RiArrowDownSLine className={active === true ? "sort-icon" : ""}/>
                                <ul className={active === true ? "sort__list hidden" : "sort__list"}>
                                    <li className="sort__item" onClick={() => activeValue({value: "A-Z"})}>A - Z</li>
                                    <li className="sort__item" onClick={() => activeValue({value: "Z-A"})}>Z - A</li>
                                    <li className="sort__item" onClick={() => activeValue({value: "Price Increment"})}>Price Increment</li>
                                    <li className="sort__item" onClick={() => activeValue({value: "Price Decrement"})}>Price Decrement</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sort;