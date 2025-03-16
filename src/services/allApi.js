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

// add Project
export const addProjectAPI =  async (reqBody, reqHeader) =>{
    return await commonAPI('POST', `${serverURL}/add-project`, reqBody, reqHeader)
}

// get home Project
export const getHomeProjectAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/home-project`)
}

// get all projects
// query parameter = baseURL?key = value
export const getAllProjectsAPI = async (searchKey, reqHeader)=>{
    return await commonAPI(`GET`, `${serverURL}/all-projects?search=${searchKey}`, "" , reqHeader)
}

// get user project
export const getUserProjectsAPI = async (reqHeader)=>{
    return await commonAPI(`GET`, `${serverURL}/user-projects`, "" , reqHeader)
}