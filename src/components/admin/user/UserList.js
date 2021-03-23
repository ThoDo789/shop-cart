import React from 'react';
import './userList.css'
const UserList = () => {
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