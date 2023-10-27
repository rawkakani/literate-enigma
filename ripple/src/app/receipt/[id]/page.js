'use client';
import {useEffect} from 'react'
export default function Home({params}) {
    useEffect(() => {
        console.log(params.id)

    }, []);

    return (
        <div className="w-screen h-full justify-center items-center flex flex-col">
            
            
        </div>
        )

}


