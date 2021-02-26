import React from 'react';
import {BsArrowRight} from "react-icons/all";
import './contact.css'
import {useSelector} from "react-redux";

const Contact = () => {
    const {themes} = useSelector(state => state.ProductReducer)
    return (
        <div className="container-fluid"  style={themes}>
            <div className="container">
                <div className="row contact">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row"><h3 className="col-12">Contact Us</h3></div>
                        <form className="row">
                            <div className="contact__info col-lg-6 col-md-6">
                                <input className="contact__field" type="text" placeholder="Name"/>
                                <input className="contact__field" type="email" placeholder="Email"/>
                            </div>
                            <div className="contact__info col-lg-6 col-md-6">
                                <input className="contact__field" type="text" placeholder="Company"/>
                                <input className="contact__field" type="number" placeholder="Phone"/>
                            </div>
                            <div className="col-lg-12">
                                <textarea className="contact__field" rows="10" cols="50" placeholder="Message"/>
                            </div>
                            <div className="col-lg-12 contact--submit ">
                                <button type="submit" className="btn-contact"> Send <BsArrowRight/></button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;