
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {Link} from "react-router-dom";
import currencyFormatter from "currency-formatter";
import './userList.css';
import { getUser } from '../../../store/actions/ActionUser';

    

const UserList = () => {
    const dispatch = useDispatch()
    const {loading, users, error} = useSelector(state => state.userReducer)
    console.log(users)
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <div className="user">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Fisrt name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Number Phone</th>
                    <th scope="col">Question</th>
                    <th scope="col">Answer</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>

                </tbody>
            </table>
        </div>
    );
};

export default UserList;