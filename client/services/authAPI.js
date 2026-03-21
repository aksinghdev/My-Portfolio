import { apiConnector } from "../api/apiConnector"

export const signupAPI = async(data)=>{

  return await apiConnector(
    "POST",
    "/auth/signup",
    data
  )

}

export const loginAPI = async(data)=>{

  return await apiConnector(
    "POST",
    "/auth/login",
    data
  )

}

// // services/authService.js
// import { apiConnector } from "./apiConnector";
// import { ENDPOINTS } from "./apis";

// export const logoutService = async () => {
//   const response = await apiConnector(
//     "POST",
//     ENDPOINTS.LOGOUT,
//     null,
//     null,
//     null
//   );
//   return response;
// };