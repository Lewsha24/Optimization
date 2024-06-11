import {NavLink, Outlet} from "react-router-dom";
import AuthStatus from "../component/AuthStatus";
import { useTransition} from "react";

const MainLayout = () => {
    // const [isPending, startTransition] = useTransition()
    return (
        <div>
            <AuthStatus/>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" >
                            About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="users">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="login">
                        Login
                    </NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default MainLayout