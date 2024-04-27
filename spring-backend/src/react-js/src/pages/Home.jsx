import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function Home() {

    const [users,setUsers] = useState([])

    const {id} = useParams();

    useEffect(() => {
        loadUsers();
    },[]);


    const loadUsers = async ()=>{
        const result= await axios.get("http://localhost:8080/api/v1/users");
        setUsers(result.data);
        //console.log(result.data)
    }

    const deleteUser = async (id)=>{
        await axios.delete(`http://localhost:8080/api/v1/users/${id}`);
        loadUsers();
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        users.map((user,index)=> (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>


                                <td>
                                    <Link className="btn btn-outline-success mx-2"
                                          to={`/viewUser/${user.id}`}>View</Link>
                                    <Link className="btn btn-light mx-2" to={`/editUser/${user.id}`}>Edit</Link>
                                    <button className="btn btn-dark mx-2" onClick={() => deleteUser(user.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}