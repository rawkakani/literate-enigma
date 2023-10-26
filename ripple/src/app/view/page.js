'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
        console.log(localStorage.id)

    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center flex flex-col">
            
            <h1>Event Name</h1>
            <p>Say Hello to my event</p>
            <p>Date: <span></span></p>
            
            
            <p>Goal: <span>GHC100</span></p>
            <p>Closing Date: <span></span></p>
            <a href="">Share With Freind</a>
            <a href="/donate">Donate</a>
            
           
        </div>
        )

}


