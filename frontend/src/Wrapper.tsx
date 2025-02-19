import { ReactNode, useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import UserContextProvider from "./UserContext"


interface userContextType{
  username:string|null,
  email:string
}

const Wrapper = ({children}:{children:ReactNode}) => {
  const [user,setUser]=useState<userContextType>({
    username: "",
    email: "",
  })

    const navigate=useNavigate()
    useEffect(()=>{
        const token=Cookies.get("token")
        console.log(token)
        if(!token)navigate("/signin")
        axios.get(`${BACKEND_URL}/user/getme`,{withCredentials:true}).then(res=>setUser(res.data.user)).catch(err=>console.log(err))
    },[setUser])
  return (
    <UserContextProvider user={user}>
    <div>
      {children}
    </div>
    </UserContextProvider>
  )
}

export default Wrapper
