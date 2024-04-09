import React, { useState } from 'react';
import LoginImg from '../../images/loginform.png';
import {createUser} from "../../services/auth";

export default function LoginForm() {
    const initialState = {
        userName: "",
        email: "",
        password: ""
    };
    const [formInputData, setFormInputData] = useState(initialState);
    const [showMessage, setShowMessage] = useState(false);

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setFormInputData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const gotoHome = async () => {
        // e.preventDefault();
        setShowMessage(false);
        window.location = '/';
    }

    const handleSubmitTest = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(formInputData));
        const response = await createUser(formInputData);
        // console.log({response});
        // console.log(typeof response.statusCode);
        if (response.statusCode === "201"){
        console.log("yuup");

            setShowMessage(true);
            setTimeout(gotoHome, 5000);
        }
    };

    return (
        <div className='container p-5 w-100'>
            {showMessage && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                        {/*<use xlink:href="#check-circle-fill"/>*/}
                    </svg>
                    <div>
                        An example success alert with an icon
                    </div>
                </div>


            )}
            <div className="row m-5">
                <div className="col-md-6">
                    <img src={LoginImg} alt='homeimage' height='400px' className='p-2'/>
                </div>
                <div className="col-md-6">
                    <h2 className='p-2'>Request Approval</h2>
                    <form method="POST">
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="username">Username</label>
                            <input type="text" value={formInputData.userName} onChange={onHandleChange} id="username" name="userName" className="form-control" />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="email">Email address</label>
                            <input type="email" value={formInputData.email} onChange={onHandleChange} id="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="password">Password</label>
                            <input type="password" value={formInputData.password} onChange={onHandleChange} id="password" name="password" className="form-control" />
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmitTest}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
