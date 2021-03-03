import React from 'react';
import {Link} from "react-router-dom";
import "./login.css"
const Login = () => {
    return (

        <div className="container">
            <div className="row">
                <form className="col-12 login">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Enter email"/>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>

                    </div>
                    <Link to="/register" className="text-left"> Are you have account ?</Link>
                    <button type="submit" className="btn-login">Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Login;