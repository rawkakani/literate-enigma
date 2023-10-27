'use client';
import {useEffect} from 'react'

export default function Home({params}) {
    useEffect(() => {
        console.log(params.id)

    }, []);


    const deposit = async (e) => {
        e.preventDefault()

        const amount = document.getElementById('amount').value

        document.getElementById('loading').classList.remove('hidden')
        await fetch('/api/deposit',{
            method: "POST",
            body: JSON.stringify({
                "campaignID": 2,
                "investorId": parseInt(localStorage.walletId),
                "amount": parseInt(document.getElementById('amount').value)
            })
        }).then(res => {
            console.log(res)
            window.location = '/receipt'
        }).catch(err => {
            console.log(err)
            window.location = '/receipt'
        })
    }

    return (
        <div className="w-screen h-full justify-center items-center flex flex-col">

            <div className="flex flex-col space-y-4 max-w-sm w-full text-center cursor-pointer p-4" >
                <h1 className="text-xl font-bold">Select Service To Pledge</h1>
                <a href="/receipt/1234" className="w-full p-2 bg-gray-800">
                    Cooking
                </a>
                
                <a href="/receipt/1234" className="w-full p-2 bg-gray-800">
                    Photography
                </a>
                

                <a href="/receipt/1234" className="w-full p-2 bg-gray-800">
                    Driving
                </a>
                
                <a href="/receipt/1234" className="w-full p-2 bg-gray-800">
                    Accomodation
                </a>
                
            </div>

        </div>
        )

}


