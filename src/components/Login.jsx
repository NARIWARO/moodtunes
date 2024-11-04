import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { loginEndpoint } from '@/spotify/spotifyLogin'



const Login = () => {

    return (
        <>
            <div className="h-screen w-full p-2 flex flex-col justify-center items-center bg-black">
                <div className="flex justify-center items-center">
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" width="40%" alt="spotifyLogo" />
                </div>
                <h1 className='text-2xl text-white mx-6'>login to spotify</h1>
                <a href={loginEndpoint} className="m-4 px-6 text-black font-bold bg-white rounded-sm">login</a>
            </div>
        </>
    )
}

export default Login
