import { AUTH_ENDPOINTS } from "./api";

export async function createUser(credentials) {
    try {
        console.log('Sing');
        console.log(JSON.stringify(credentials));
        const response = await fetch(AUTH_ENDPOINTS.SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set Content-Type header for JSON data
            },
            body: JSON.stringify(credentials)
        });
        // console.log(response.body);
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return await response.json();
    } catch (error) {
        console.error('Error while creating user', error);
        return null;
    }
}

export async function getAllUsers(){
    try {
        const response = await fetch(AUTH_ENDPOINTS.GETUSERS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // Set Content-Type header for JSON data
            }
        });
        // console.log(response.body);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        // window.location = "/dashboard";
        return await response.json();
    } catch (error) {
        console.error('Error while fetching users', error);
        return null;
    }
}

export async function getUser(userid){
    try {
        const response = await fetch(AUTH_ENDPOINTS.GETUSER+userid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json' // Set Content-Type header for JSON data
            }
        });
        // console.log(response.body);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        // window.location = "/dashboard";
        return await response.json();
    } catch (error) {
        console.error('Error while fetching user', error);
        return null;
    }
}

export async function updateUser(request){
    try{
        console.log('request', request);
        const response = await fetch(AUTH_ENDPOINTS.UPDATEUSER,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        window.location = '/';
        return await response.json();
    }catch(error){
        console.error('Error while updating user', error);
    }
}

export async function deleteUser(userid){
    try{
        const response = await fetch(AUTH_ENDPOINTS.DELETEUSER+userid,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        window.location = '/';
        return await response.json();
    }catch(error){
        console.error('Error while delete user', error);
    }
}