import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.module.css"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {

    }

    return ( 
        <div>
            <div className="modal">
                <div className="modalfDiv"></div>
                <div className="modalsDiv">
                    <img className="centerModal" src="https://web.bizofficer.com/subscription/logo.png" alt="" /> <br />
                    <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
                    <Link className="centerModal" to="/login">forget password ?</Link>
                    <Link to='/'><button className='loginBtn' onClick={handleSubmit}>Login</button></Link> 
                    <Link to="/"><button className="closeBtn">close</button></Link>
                    <Link className="signUp" to="/login">New to BizOfficer? Create your account, Its Free</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Login;