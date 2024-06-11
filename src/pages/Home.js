import React, { useEffect, useState, useTransition} from "react";
import {Component} from "../component/Component";
import {isElementType} from "@testing-library/user-event/dist/utils";

// const Admin = lazy(() => import('../component/Admin').then(module => ({
//     default: module.Admin
// })))

const Home = ({}) => {
    const [admin, setAdmin] = useState(false)
    const [isPending, startTransition] = useTransition()
    const [render, setRender] = useState([])

    const generateComponent = () => {
        const componentNumber = Math.floor(Math.random() * 2) + 1;
        const componentNumber2 = Math.floor(Math.random() * 2) + 2;
        setRender([`Admin${componentNumber}`,`Admin${componentNumber2}`])
    }

    useEffect(() => {
        setTimeout(() => {
            // Проблема в передаваемых пропсах
            generateComponent()
        }, 1000)
    }, [])

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => startTransition(() => {
                setAdmin(s => !s)
                generateComponent()
            } )}>toggle Admin</button>
            {isPending && "loading??"}
            {admin ? <Component name="Admin"/> : <h2> not Admin</h2>}
            {
                render.map((item, index) => <Component key={index} name={item}/>)
            }
        </>
    )
}

export default Home


