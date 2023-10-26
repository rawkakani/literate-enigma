'use client';
import {useEffect} from 'react'
export default function Home({params}) {
    useEffect(() => {
        console.log(params.id)

    }, []);

    return (
        <div className="w-screen h-screen justify-center items-center flex flex-col">
            <h1>Who has donated</h1>
            
        </div>
        )

}


