import React, {Fragment} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DarkMode} from "../../../store/actions/ActionProcduct";
import {BiMoon, BsSun} from "react-icons/all";
import './darkLight.css'

const DarkLightThemes = () => {
    const {status} = useSelector(state=>state.ProductReducer)
    const dispatch = useDispatch()
    const onDarkMode =()=>{

      console.log(dispatch(DarkMode()))

    }
    return (
        <Fragment>
            <button className="dark-light" type="button" onClick={onDarkMode}>{status===false?<BiMoon/>:<BsSun/>}</button>
        </Fragment>
    );
};

export default DarkLightThemes;