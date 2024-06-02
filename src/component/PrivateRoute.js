import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from "../context/AuthProvider";

const PrivateRoute =  ({children}) =>{
    const auth = useAuth()
    const location = useLocation()

    if(auth === null) {
        <Navigate to={"/login"} state={{from: location.pathname}} replace/>
    }

    return (children)
}

export default PrivateRoute