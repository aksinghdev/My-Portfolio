
console.log("All env vars:", import.meta.env);

// const LOCAL_URL = import.meta.env.VITE_LOCAL_BASE_URL;

const URL = import.meta.env.VITE_BASE_URL;

const BASE_URL = URL + "/api/v1"
// const BASE_URL = LOCAL_URL + "/api/v1"

console.log("base url", BASE_URL);


// auth login/signup

export const userEndpoints = {
    SIGNUP_API: BASE_URL + "/user/signup",
    LOGIN_API: `${BASE_URL}/user/login`,
    CONTACT_API: `${BASE_URL}/user/contact`,
} 

export const dashboardEndpoints ={
    DASHBOARD_API : BASE_URL + "/auth/dashboard",
}
export const chatEndpoints ={
    CHAT_API : BASE_URL + "/chat",
}

