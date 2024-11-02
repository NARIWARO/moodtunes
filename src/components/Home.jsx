import { useState, useEffect } from "react";
import Login from "./Login";


const Home = () => {
    const [hash, setHash] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        console.log(hash)
    }, [])
    return (
        <>
            <Login />

        </>
    )
}

export default Home
