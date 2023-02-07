import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.module.css"

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        const payload = {
            name,
            email,
            password
        }
        console.log(payload)
        fetch("https://backened-rajivpathak199-gmailcom.vercel.app/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        })
    }

    return ( 
        <div>
            <div className="modal">
                <div className="modalfDiv"></div>
                <div className="modalsDiv">
                    <img className="centerModal" src="https://web.bizofficer.com/subscription/logo.png" alt="" /> <br />
                    <input type='name' placeholder='name' onChange={(e) => setName(e.target.value)} /> <br />
                    <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /> <br />
                    <Link className="centerModal" to="/login">forget password ?</Link>
                    <Link to='/'><button className='loginBtn' onClick={handleSubmit}>SignUp</button></Link> 
                    <Link to="/"><button className="closeBtn">close</button></Link>
                    <Link className="signUp" to="/login">if account avilable directly go to login</Link>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;