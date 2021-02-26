import React from 'react';
import {SiApacherocketmq} from "react-icons/all";
import './register.css'
import RegisterEmployee from "./RegisterEmployee";
import {useSelector} from "react-redux";

const Register = () => {
    const {themes} = useSelector(state => state.ProductReducer)
    return (
        <div className="container-fluid" style={themes}>
          <div className="container register">
              <div className="row">
                  <div className="col-lg-4 register__left">

                      <h3 className="register__title text-center">
                          <SiApacherocketmq className="rocket d-block "/>
                          Welcome!
                      </h3>
                      <p className="register__content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Consequuntur culpa cumque deserunt dolores ea, enim,
                          in iste laborum molestias necessitatibus non nulla.
                      </p>
                      <button type="submit" className="btn-login">Login</button>
                  </div>
                  <div className="col-lg-8  register__right">
                      <div className="row">
                          <div className="select-subject col-lg-12">


                                  <RegisterEmployee/>

                          </div>

                      </div>




                  </div>
              </div>

          </div>
        </div>
    );
};

export default Register;