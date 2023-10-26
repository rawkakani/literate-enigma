'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
        console.log(localStorage.id)

    }, []);

    return (
        <div className="w-screen h-screen justify-center items-center flex flex-col">

            
        </div>
        )

}


