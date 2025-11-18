import axios from 'axios'
import {SERVER_URL} from "./serverurl"
export const commonAPI= async(httpRequest,url,reqBody,reqHeader)=>{

    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}

export async function checkServer() {
  try {
        const res = await fetch(`${SERVER_URL}/health`);
  if (res.ok) return "active";
  } catch {
    return "waking";
  }
}
