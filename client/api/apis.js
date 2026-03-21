
const URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = URL + "/api/v1"

console.log("base url", BASE_URL);


// auth login/signup

export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: `${BASE_URL}/auth/login`,
} 

export const dashboardEndpoints ={
    DASHBOARD_API : BASE_URL + "/user/dashboard",
}

