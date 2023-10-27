'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
        console.log(localStorage.id)

    }, []);

    return (
        <div className="w-screen h-screen flex justify-center items-center flex flex-col">
            
            <div className={"p-2 flex flex-col justify-center items-center space-y-2"}>
                <p>
                    Thank you,
                    Your donation has been received    
                </p>
                
                <a href={'/list'}>See All Doners</a>
            </div>

        </div>
        )

}


