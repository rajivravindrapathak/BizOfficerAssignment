import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./SignUp";

const AllRoutes = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
     );
}
 
export default AllRoutes;