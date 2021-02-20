import React, {useState} from 'react';
import {AiOutlineShoppingCart, BsSearch} from "react-icons/all";
import {Link,useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {searchList} from "../store/actions/ActionProcduct";

const Nav = () => {
    const location = useLocation();

    const{totalQuantities} = useSelector(state=>state.CartReducer)
    const dispatch=useDispatch()

    const [name,setName] = useState('')
    const onHandlerSearch =(e)=>{
        setName(e.target.name=e.target.value)

    }
    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(searchList(name))


    }
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                       <Link to="/"><img src="/images/logo.webp" alt=""/></Link>
                    </div>
                    {location.pathname==="/"? <form className="search"
                          onSubmit={onSubmit}

                    >
                        <input type="text"
                               placeholder="Search..."
                               className="input-search"
                               name="name"
                               value={name}
                               onChange={onHandlerSearch}
                        />
                        <button type="submit"
                                className="btn-search"

                        ><BsSearch/></button>
                    </form>:''}
                    <div className="nav__right">
                      <Link to="/cart">
                          <div className="basket">
                              <AiOutlineShoppingCart size='30' className="cart-icon"/>
                              <span>{totalQuantities}</span>
                          </div>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;