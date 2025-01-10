import React, {useEffect, useState } from "react"
import { post } from "../../../../BackEnd/Services/ApiEndPoint"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
function Navbar({setNodata}) {
    const navigate = useNavigate()
     const [autherized, setAutherized] = useState(false);  
    const handlelogout = async () => {
        try {
            const req = await post('/auth/logout')
            const res = req.data
            if (res.success) {
                toast.success(res.message)
                setAutherized(true); 
                 setNodata(true)
            }
           
        } catch (error) {
            toast.error(error.response.data.message)
        }

    }
    const handlelogin = async () => {
        try {
            navigate('/login')
          
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <>
            <div className="navbar">
                <div className="container-fluid p-2 d-flex justify-content-end">
                    {
                        autherized ?
                            <button className="btn btn-dark text-white mx-3" onClick={handlelogin}>Login</button>
                         :
                             <button className="btn btn-dark text-white mx-3" onClick={handlelogout}>Logout</button>
                    }
                </div>

            </div>
        </>
    )
}
export default Navbar