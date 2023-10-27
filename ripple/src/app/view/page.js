'use client';
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {


        const shareData = {
            title: "Togeada",
            text: "Crowdfunding for freinds and families",
            url: "https://literate-enigma.vercel.app/view",
        };

        const btn = document.getElementById("share");

        // Share must be triggered by "user activation"
        btn.addEventListener("click", async () => {
            try {
                await navigator.share(shareData);
                alert("Succefully Shared Togeada")
            } catch (err) {
                alert("Succefully Copied Togeada Donation Link")
                console.log(err.message,"error message")
            }
        });

    }, []);

    return (
        <div className="w-screen h-full flex flex-col p-2 space-y-2">

            <h1 className="text-4xl font-bold p-2">In honour of Kofi</h1>
            <p className="text-sm max-w-sm p-2">
                Join us as we come together to celebrate the remarkable life of Kofi.
                It is a time for us to reminisce about the joy,
                love, and warmth that he brought into our lives.
                Through tears and laughter,
                we will recount the memories that encapsulate the incredible person that he was.
            </p>

            <p className="p-2">Date: <span>27 October 2023 </span></p>
            
            
            <p className="p-2">Goal: <span>GHC100</span></p>
            <p className="p-2"> Closing Date: <span>27 October 2024</span></p>
            

            <div className="flex flex-col space-y-2 items-center justify-center">
                <a id={"share"} href="#" className="p-2 rounded bg-green-400 text-black w-64 text-center">Share With Friends</a>
                <a href="/donate" className="p-2 rounded bg-blue-400 text-black w-64 text-center">Donate</a>
                <a href="/pledge" className="p-2 rounded bg-blue-400 text-black w-64 text-center">Pledge Service</a>
            </div>
           
        </div>
        )

}


