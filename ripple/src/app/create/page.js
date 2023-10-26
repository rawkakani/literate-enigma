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
            <form className={"flex flex-col space-y-2 max-w-md w-full"}>
                <input className={"p-2 rounded"} type="text" placeholder={"Event Name"}></input>
                <textarea className={"p-2 rounded"} placeholder={"Event Description"}></textarea>
                <p>Date Of Event</p>
                <input type={"datetime-local"} className={"text-gray-400"}/>
                <p>End Of Crowdfunding</p>
                <input type={"datetime-local"} className={"text-gray-400"}/>
                
                <p>Goal Amount</p>
                <input type={"number"} className={"text-gray-400"}/>
                
                <button className={"p-2"} onClick={(e) => createCampaign(e)}>Create Event</button>
            </form>
        </div>
        )

}


