import React from 'react';
import {BsArrowRight} from "react-icons/all";
import './contact.css'
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup'
import {string} from "yup";


const Contact = () => {
    const {themes} = useSelector(state => state.ProductReducer)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object().shape({
        name:Yup.string()
            .required("Name is required"),
        email:Yup.string()
            .email()
            .required("Email is required"),
        company: Yup.string()
            .required('Name is required'),
        phone: Yup.string()
            .required('Number phone required')
            .matches(phoneRegExp, 'Phone number is not valid'),
        message:Yup.string()
            .required("Message is required")

    })
    const {errors, register, handleSubmit} = useForm({resolver: yupResolver(validationSchema)})
    const onSubmit = async data => {
        console.log(data)
    }
    return (
        <div className="container-fluid" style={themes}>
            <div className="container">
                <div className="row contact">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="row"><h3 className="col-12">Contact Us</h3></div>
                        <form className="row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="contact__info col-lg-6 col-md-6">
                                <input
                                    className={`contact__field ${errors.name ? "is-invalid" : ''}`}
                                    type="text"
                                    placeholder="Name"
                                    name='name'
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.name?.message}</div>

                                <input
                                    className={`contact__field ${errors.email ? "is-invalid" : ''}`}
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>
                            <div className="contact__info col-lg-6 col-md-6">
                                <input
                                    className={`contact__field ${errors.company ? "is-invalid" : ''}`}
                                    type="text"
                                    placeholder="Company"
                                    name="company"
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.company?.message}</div>
                                <input
                                    className={`contact__field ${errors.phone ? "is-invalid" : ''}`}
                                    type="number"
                                    placeholder="Phone"
                                    name="phone"
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.phone?.message}</div>
                            </div>
                            <div className="col-lg-12">
                                <textarea
                                    className={`contact__field ${errors.message ? "is-invalid" : ''}`}
                                    name="message"
                                    rows="10" cols="50"
                                    placeholder="Message"
                                    ref={register}
                                />
                                <div className="invalid-feedback">{errors.message?.message}</div>
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