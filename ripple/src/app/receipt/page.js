'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
        console.log(localStorage.id)

    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center flex flex-col">
            
            <input type="text" placeholder={"Amount to Donate"}/>
            <button className={"p-2"}>Donate Now</button>

        </div>
        )

}


