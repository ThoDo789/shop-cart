import React, {Fragment,useState} from 'react';
import {useDispatch} from "react-redux";
import {DarkMode} from "../../../store/actions/ActionProcduct";
import {BiMoon, BsSun} from "react-icons/all";
import './darkLight.css'
const DarkLightThemes = () => {
    const[status,setStatus]= useState(true)
    const dispatch = useDispatch()
    const onDarkMode =()=>{
        setStatus(!status)
      console.log(dispatch(DarkMode(status)))

    }
    return (
        <Fragment>
            <button className="dark-light" type="button" onClick={onDarkMode}>{status===false?<BiMoon/>:<BsSun/>}</button>
        </Fragment>
    );
};

export default DarkLightThemes;