import { useState } from "react"
import { createSales } from "../api"

export default function useCreateSales(){
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>(null)

    const submit = async (payload)=>{
        setLoading(true)
        setError(null)
        try {
            const responseSales = await createSales(payload)
            return responseSales
        } catch (error) {
            setError(error)
            throw error
        } finally{
            setLoading(false)
        }
    }
    return{loading,error, submit}
}