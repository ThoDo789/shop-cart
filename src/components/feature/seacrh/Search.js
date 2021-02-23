import React, {Fragment, useState} from 'react';
import {BsSearch} from "react-icons/all";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {searchList} from "../../../store/actions/ActionProcduct";
import './search.css'
const Search = () => {

    const location = useLocation();

    const dispatch=useDispatch()

    const [name,setName] = useState('')

    const onHandlerSearch =(e)=>{

        setName(e.target.name=e.target.value)

    }
    const onSubmit =(e)=>{

        e.preventDefault()

       dispatch(searchList(name))

        window.scroll(0,800)
    }

    return (
        <Fragment>
            {location.pathname==="/"&&<form className="search"
                                            onSubmit={onSubmit}
            >
                <input type="text"
                       placeholder="Search..."
                       className="input-search"
                       name="name"
                       value={name}
                       onChange={onHandlerSearch}
                />
                <button type="submit" className="btn-search"><BsSearch/></button>
            </form>}
        </Fragment>
    );
};

export default Search;