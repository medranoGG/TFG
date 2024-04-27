import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phoneNumber: "",
        passwd: ""
    });

    const { name, surname, email , phoneNumber, passwd} = user;

    const onInputChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/users", user)
        navigate("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-3 border rounded p-4 mt-5 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type={"email"}
                                className="form-control"
                                placeholder="Enter your email address"
                                name="email"
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passwd" className="form-label">Password</label>
                            <input
                                type={"passwd"}
                                className="form-control"
                                placeholder="Enter your passwd address"
                                name="passwd"
                                value={passwd}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}