import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import "./Navbar.module.css"

const Navbar = () => {

    const [modal, setModal] = useState(false)

    const LoginModal = () => {
        setModal(!modal)
    }

    return ( 
        <div>
            <div className="navDiv">
                <p>Dashboard</p>
                <Link to="/login"><button className="navBtn" onClick={LoginModal}>Login</button></Link>
            </div>
            <Dashboard />
        </div>
     );
}
 
export default Navbar;