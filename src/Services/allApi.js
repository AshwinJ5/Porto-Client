import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverurl"


//User register API
export const registerAPI= async(user)=>{
    return await commonAPI('POST',`${SERVER_URL}/user/register`,user,"")
}

//User login API
export const loginAPI= async(user)=>{
    return await commonAPI('POST',`${SERVER_URL}/user/login`,user,"")
}

//Add new Tag API
export const addNewTagAPI= async(tag)=>{
    return await commonAPI('POST',`${SERVER_URL}/newtag`,tag,"")
}

//Add new Blog API
export const addNewBlogAPI= async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/addblog`,reqBody,"")
}

//Get some Tags for Landing page
export const getAllTagAPI= async()=>{
    return await commonAPI('GET',`${SERVER_URL}/alltag`,"","")
}
//Get some blogs for Landing page
export const getAllBlogAPI= async()=>{
    return await commonAPI('GET',`${SERVER_URL}/allblog`,"","")
}