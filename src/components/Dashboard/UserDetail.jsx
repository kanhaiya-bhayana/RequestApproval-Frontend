import React, {useEffect, useState} from "react";
import {createUser, getUser} from "../../services/auth";
import LoginImg from "../../images/loginform.png";
import {useParams} from 'react-router-dom'

export default function UserDetail(props){

    let { id } = useParams();
    console.log(id);

    useEffect(() => {
        getUserDetail();
    }, []);

    const initialState = {
        userName: "",
        email: "",
        password: ""
    };
    // const [userDetail, setUserDetail] = useState(initialState);
    const [formInputData, setFormInputData] = useState(initialState);
    const [editMode, setEditMode] = useState(false);

    const getUserDetail = async () => {
        try {
            const response = await getUser(id);
            setFormInputData({
                userName: response.userName,
                email: response.email,
                password: response.password
            });
        } catch (error) {
            console.error('Error fetching user detail:', error);
        }
    }

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setFormInputData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitTest = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(formInputData));
        const response = await createUser(formInputData);
        console.log(response);
    };
    const handleEditClick = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        setEditMode(true); // Toggles the edit mode
    };

    return (
        <div className='container p-5 w-100'>
            <div className="row m-5">
                <div className="col-md-6">
                    <img src={LoginImg} alt='homeimage' height='400px' className='p-2' />
                </div>
                <div className="col-md-6">
                    <h2 className='p-2'>Request Approval</h2>
                    <form>
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="username">Username</label>
                            <input disabled={!editMode ? true : false} type="text" value={formInputData.userName} onChange={onHandleChange} id="username" name="userName" className="form-control" />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="email">Email address</label>
                            <input disabled={!editMode ? true : false} type="email" value={formInputData.email} onChange={onHandleChange} id="email" name="email" className="form-control" />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label" style={{ float: "left" }} htmlFor="password">Password</label>
                            <input disabled={!editMode ? true : false} type="password" value={formInputData.password} onChange={onHandleChange} id="password" name="password" className="form-control" />
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <button className="btn btn-primary" onClick={handleEditClick}>Edit</button>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-danger" onClick={handleSubmitTest}>Delete</button>
                            </div>
                            <div className="col-md-8"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}