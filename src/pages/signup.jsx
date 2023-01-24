import React from "react";
import '../css/signup.css';
import { useState } from 'react';
import { Form} from "react-router-dom";


function SignUp() {

    const url = "https://apidev.kanvas.dev/v2/users";
    
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

    const sendData = async (event) => {

        event.preventDefault();

        const userData = JSON.stringify({
            firstname: data.firstName?.trim(),
            lastname: data.lastName?.trim(),
            email: data.email?.trim(),
            password: data.password?.trim(),
            verify_password: data.confirmPassword?.trim(),
            default_company: data.company?.trim(),
        })

        const sendUser = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: userData,
        });

        const givenResult = await sendUser.json();
        alert(givenResult?.errors.message);
    }

    return (

        <Form onSubmit={sendData} id="login-form" className="login-form" autoComplete="off">

            <h1 className="a11y-hidden">SignUp Form</h1>

            <div>
                <label className="label-email">
                    <input type="text"
                        className="text"
                        name="firstName"
                        onChange={handleInputChange}
                        placeholder="First Name"
                        tabIndex="1"
                        required />
                    <span className="required">Firts Name</span>

                </label>
            </div>

            <div>
                <label className="label-email">
                    <input
                        type="text"
                        className="text"
                        name="lastName"
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        tabIndex="2"
                        required />
                    <span className="required">Last Name</span>
                </label>
            </div>

            <div>
                <label className="label-email">
                    <input
                        type="email"
                        className="text"
                        name="email"
                        onChange={handleInputChange}
                        placeholder="Email"
                        tabIndex="3"
                        required />
                    <span className="required">Email</span>
                </label>
            </div>

            <div>
                <label className="label-email">
                    <input
                        type="text"
                        className="text"
                        name="company"
                        onChange={handleInputChange}
                        placeholder="company"
                        tabIndex="4"
                        required />
                    <span className="required">Company</span>
                </label>
            </div>
            <div>
                <label className="label-password">
                    <input
                        type="password"
                        className="text"
                        name="password"
                        onChange={handleInputChange}
                        placeholder="Password"
                        tabIndex="6"
                        required />
                    <span className="required">Password</span>
                </label>

                <label className="label-password">
                    <input
                        type="password"
                        className="text"
                        name="confirmPassword"
                        onChange={handleInputChange}
                        placeholder="Confirm Password"
                        tabIndex="7"
                        required />
                    <span className="required">Confirm Password</span>
                </label>
                <br />
                <a  type="button" href="/login">Login</a>
            </div>

            <input type="submit" value="Sign Up" />
           

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
        </Form>
    )
}

export default SignUp;
