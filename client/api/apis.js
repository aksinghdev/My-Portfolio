
const BASE_URL = import.meta.env.VITE_BASE_URL;

console.log("base url", BASE_URL);


// auth login/signup

export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: `${BASE_URL}/auth/login`,
} 

export const dashboardEndpoints ={
    DASHBOARD_API : BASE_URL + "/user/dashboard",
}

