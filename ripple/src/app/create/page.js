'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
        console.log(localStorage.id)
        
    }, []);

    
    const createCampaign = (e) => {
        e.preventDefault()
        window.location = '/view'
    }
    
    return (
        <div className="w-screen h-screen flex justify-center items-center flex flex-col">
            <form className={"flex flex-col space-y-4 max-w-md w-full p-2 "}>
                <input className={"p-2 rounded bg-gray-800"} type="text" placeholder={"Event Name"}></input>
                <textarea className={"p-2 rounded bg-gray-800 h-32"} placeholder={"Event Description"}></textarea>
                <div className="flex flex-col">
                    <p>Date Of Event</p>
                    <input type={"datetime-local"} className={"text-gray-400 bg-gray-800 p-2"}/>
                </div>

                <div className="flex flex-col">
                    <p>End Of Crowdfunding</p>
                    <input type={"datetime-local"} className={"text-gray-400 bg-gray-800 p-2"}/>
                </div>

                
                <div className="flex flex-col">
                    <p>Goal Amount</p>
                    <input type={"number"} className={"text-gray-400 p-2 bg-gray-800 appearance-none"} placeholder="0.00"/>
                </div>

                <button className={"p-2 bg-green-400 rounded"} onClick={(e) => createCampaign(e)}>Create Event</button>
            </form>
        </div>
        )

}


