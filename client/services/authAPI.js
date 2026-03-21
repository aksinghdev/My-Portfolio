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

