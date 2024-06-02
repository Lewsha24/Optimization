import {useAuth} from "../context/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";

const Login =({}) => {
    const auth = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from || '/'

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')

        console.log(username);
        auth.signin(username, () => {
            navigate(from,{
                replace: true,
            })
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" name="username" placeholder="Username"/>
            </label>
            <button type={"submit"}>
                Login
            </button>
        </form>
    )
}


export default Login