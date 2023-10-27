'use client';
import {useEffect} from 'react'
export default function Home({params}) {
    useEffect(() => {
        console.log(params.id)

    }, []);

    return (
        <div className="w-screen h-full justify-center items-center flex flex-col">

            <div className="flex p-2 flex-col items-center max-w-md space-y-2">
                <h1 className="text-4xl">Successful Withdrawl</h1>
                <p className="text-xs w-64">
                    Your donations have been withdrawn, and will be availible
                    in your account in a couple of days
                </p>
            </div>
        </div>
        )

}


