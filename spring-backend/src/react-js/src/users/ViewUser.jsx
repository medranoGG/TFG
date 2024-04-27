import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";


export default function ViewUser() {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        passwd: ""
    });

    const  {id} = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async ()=>{
        const result= await axios.get(`http://localhost:8080/api/v1/users/${id}`);
        setUser(result.data);
        //console.log(result.data)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3 border rounded p-4 mt-5 shadow">
                    <h2 className="text-center m-4">View User</h2>

                    <div className="card">

                        <div className="card-header">
                            Details of user id: {user.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item mt-2 py-2">
                                    <b>Name: </b>{user.name}
                                </li>
                                <li className="list-group-item mt-2 py-2">
                                    <b>SurName: </b>
                                    {user.surname}
                                </li>
                                <li className="list-group-item mt-2 py-2">
                                    <b>Email: </b>
                                    {user.email}
                                </li>
                                <li className="list-group-item mt-2 py-2">
                                    <b>Phone: </b>
                                    {user.phoneNumber}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-outline-primary mt-3" to={"/"}>Back To Home</Link>

                </div>
            </div>
        </div>
    )
}