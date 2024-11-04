import { useState, useEffect } from "react";
import Login from "./Login";



const Home = () => {
    const [token, setToken] = useState("")

    useEffect(() => {
        // const token = window.localStorage.getItem
        // const hash = window.location.hash
        // console.log(hash)

    }, [])

    return (
        <>
            <Login />

        </>
    )
}

export default Home
