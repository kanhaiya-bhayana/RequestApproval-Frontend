const API_BASE_URL = 'http://localhost:8080/api/user';

export const AUTH_ENDPOINTS ={
    LOGIN: `${API_BASE_URL}/login`,
    SIGNUP: `${API_BASE_URL}/createuserprofile`,
    GETUSERS: `${API_BASE_URL}/getallusers`,
    GETUSER: `${API_BASE_URL}/getuser?`,
    // add other auth-related endpoints here
}