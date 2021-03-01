import React, {useRef} from 'react';
import {useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import axios from 'axios'
import {string} from "yup";

const RegisterMember = () => {
    const {themes} = useSelector(state => state.ProductReducer)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object().shape({

        firstName: Yup.string()
            .required("First name is required")
        ,
        lastName: Yup.string()
            .required("Last name is required")
        ,
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid')
        ,
        phoneNumber: Yup.string()
            .required('Number phone required')
            .matches(phoneRegExp, 'Phone number is not valid')
        ,
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        question:Yup.string()
            .required("Question is required")
        ,
        answer:Yup.string()
            .required("Answer is required")
        ,

    });
    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(validationSchema)})

    const onSubmit = async data => {

    }
    return (

        <div className="container" style={themes}>
            <form action="" className="row" onSubmit={handleSubmit(onSubmit)}>

                <h3 className="form-title col-lg-12">Apply as a member</h3>
                <div className="form-group  col-lg-6">
                    <input type="text"
                           className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                           placeholder="First Name"
                           name="firstName"
                           ref={register}
                    />
                    <div className="invalid-feedback">{errors.firstName?.message}</div>
                </div>
                <div className="form-group col-lg-6">
                    <input type="text"
                           className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                           placeholder="Last Name"
                           name="lastName"
                           ref={register}
                    />
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                </div>

                <div className="form-group col-lg-6">
                    <input type="email"
                           className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                           placeholder="Your-Email"
                           name="email"
                           ref={register}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                </div>

                <div className="form-group col-lg-6">
                    <input type="number"
                           className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                           placeholder="Your Phone"
                           name="phoneNumber"
                           ref={register}

                    />
                    <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                </div>
                <div className="form-group col-lg-6">
                    <input type="password"
                           className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                           placeholder="Password"
                           name="password"
                           ref={register}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <div className="form-group col-lg-6">
                    <input type="password"
                           className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                           placeholder="Confirm-Password"
                           name="confirmPassword"
                           ref={register}

                    />
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>

                </div>
                <div className="form-group col-lg-6">
                    <select
                        className={`form-control ${errors.question ? 'is-invalid' : ''}`}
                        ref={register}
                        name="question">
                        <option value="">Question</option>
                        <option value="What's your mother name?">What's your mother name?</option>
                        <option value="What's your hobby?">What's your hobby?</option>
                        <option value="What's your job?">What's your job?</option>
                    </select>
                    <div className="invalid-feedback">{errors.question?.message}</div>
                </div>

                <div className="form-group col-lg-6">
                    <input type="text"
                           className={`form-control ${errors.answer ? 'is-invalid' : ''}`}
                           placeholder="Your Answer"
                           ref={register}
                           name="answer"
                    />
                    <div className="invalid-feedback">{errors.answer?.message}</div>

                </div>

                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <label htmlFor="male"><span>Male</span>
                                <input type="radio" id="male" name="gender" ref={register} value={true} defaultChecked/>
                            </label>
                            <label htmlFor="female"><span>Female</span>
                                <input type="radio" id="female" name="gender" ref={register} value={false}/>
                            </label>

                        </div>
                        <div className="col-lg-6 submit-register">
                            <button type="submit" className="btn-register">Register</button>
                        </div>
                    </div>
                </div>


            </form>
        </div>


    );
};

export default RegisterMember;