import React from "react";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Full Stack Application
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>
                    </button>
                    <div className="ml-auto">
                        <Link className="btn btn-outline-light mx-2" to="addUser">Sign in</Link>
                        <Link className="btn btn-outline-light" to="loginUser">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
