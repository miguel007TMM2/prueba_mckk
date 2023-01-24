import '../css/signup.css';
import { useState } from 'react';
import { Form } from "react-router-dom";

function Login() {

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const url = "https://apidev.kanvas.dev/v2/auth";

    const sendData = async (event) => {

        const userData = JSON.stringify({
            email: data.email?.trim(),
            password: data.password?.trim(),
        })

        const sendUser = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: userData,
        });

        const givenResult = await sendUser.json();

        localStorage.setItem('token', givenResult?.token);

        setErrorResponse(givenResult?.errors.message);
        alert(givenResult?.errors.message);

    }

    return (
        <>
            <form onSubmit={sendData} id="login-form" className="login-form" autoComplete="off">
                <h1 className="a11y-hidden">Login Form</h1>
                <div>
                    <label className="label-email">
                        <input type="email" className="text" name="email" onChange={handleInputChange} placeholder="Email" tabIndex="1" />
                        <span className="required">Email</span>
                    </label>
                </div>
                <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabIndex="3" />
                <div>
                    <label className="label-password">
                        <input type="password" className="text" name="password" onChange={handleInputChange} placeholder="Password" tabIndex="2" />
                        <span className="required">Password</span>
                    </label>
                </div>
                <input type="submit" value="Log In" />

                <figure aria-hidden="true">
                    <div className="person-body"></div>
                    <div className="neck skin"></div>
                    <div className="head skin">
                        <div className="eyes"></div>
                        <div className="mouth"></div>
                    </div>
                    <div className="hair"></div>
                    <div className="ears"></div>
                    <div className="shirt-1"></div>
                    <div className="shirt-2"></div>
                </figure>
            </form>
        </>
    );
}

export default Login;