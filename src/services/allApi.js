import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"


// register user
export const registerAPI = async (reqBody)=>{
    return await commonAPI('POST', `${serverURL}/register`, reqBody,"")
}

// login user
export const loginAPI = async (reqBody) => {
    return await commonAPI ('POST', `${serverURL}/login`, reqBody, "")
}