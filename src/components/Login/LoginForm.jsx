import React, {useState} from 'react'
// import styles from './Home.module.css';
import LoginImg from '../../images/loginform.png'


export default function LoginForm() {
    const[userName,setUserName] = useState("");
    const[userPassword,setUserPassword] = useState("");

    const handleSubmitTest = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(userPassword);
        localStorage.setItem("username",userName);
        localStorage.setItem("userpassword",userPassword);
        window.location = "/dashboard";

    }
    return (
        <div className='container p-5 w-100'>
            {/* <div className='d-flex p-5'> */}
            <div className="row m-5">
                <div className="col-md-6">
                    <img src={LoginImg} alt='homeimage' height='400px' className='p-2'/>
                </div>
                <div className="col-md-6">
                    <h2 className='p-2'>Request Approval</h2>
                    {/* </div> */}
                    <form className=''>
                        {/* <!-- username input --> */}
                        <div className="form-group mb-4">
                            <label className="form-label" style={{float: "left"}} htmlFor="form2Example1">Username</label>
                            <input type="email" value={userName} onChange={(e) => {
                                setUserName(e.target.value)
                            }} id="form2Example1" className="form-control"/>
                        </div>
                        {/* <!-- Email input --> */}
                        <div className="form-group mb-4">
                            <label className="form-label" style={{float: "left"}} htmlFor="form2Example1">Email address</label>
                            <input type="email" value={userName} onChange={(e) => {
                                setUserName(e.target.value)
                            }} id="form2Example1" className="form-control"/>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-group mb-4">
                            <label className="form-label" style={{float: "left"}} htmlFor="form2Example2">Password</label>
                            <input type="password" value={userPassword} onChange={(e) => {
                                setUserPassword(e.target.value)
                            }} id="form2Example2" className="form-control"/>
                        </div>
                        {/* <!-- 2 column grid layout for inline styling --> */}

                        {/* <!-- Submit button --> */}
                        <button className="btn btn-primary" onClick={handleSubmitTest}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}