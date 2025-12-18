import { useState } from "react"
import { login, me } from "../api"
import { useAppDispatch } from "../../../hooks/redux"
import { setUser } from "../authSlice"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
    const [data,setData]=useState({
        email:"",
        passwordHash:""
    })
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=e.target
        setData((prev)=>({...prev,[name]:value}))
    }
    const handlerSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try {
            await login(data)
            const user = await me()
            dispatch(setUser(user))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="email" name="email" placeholder="email" value={data.email} onChange={handlerChange}/>
                <input type="password" name="passwordHash" placeholder="password" value={data.passwordHash} onChange={handlerChange}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}