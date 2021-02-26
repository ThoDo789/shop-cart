import React from 'react';
import {useSelector} from "react-redux";
const RegisterEmployee = () => {
    const {themes} = useSelector(state => state.ProductReducer)

    return (

        <div className="container" style={themes}>
            <form action="" className="row">

            <h3 className="form-title col-lg-12">Apply as a member</h3>
                <div className="form-group  col-lg-6">
                    <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Your-Email"/>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Last Name"/>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Your Phone"/>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Password"/>
                </div>
                <div className="form-group col-lg-6">
                    <select className="form-control ">
                        <option>Large select</option>
                        <option>Large select</option>
                        <option>Large select</option>
                    </select>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Confirm-Password"/>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text" className="form-control " placeholder="Your Answer"/>
                </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <label htmlFor="male"><span>Male</span>
                            <input type="radio" id="male"  name="gender" value="male"/>
                        </label>
                        <label htmlFor="female"><span>Female</span>
                            <input type="radio" id="female"  name="gender" value="female"/>
                        </label>
                    </div>
                    <div className="col-lg-6 submit-register">
                        <button type="submit" className="btn-register">Register</button>
                    </div>
                </div>
            </div>



        </form></div>



    );
};

export default RegisterEmployee;