import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";

const AllRoutes = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<Navbar />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
     );
}
 
export default AllRoutes;