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

            <div className="flex flex-col">

                <div className="w-64 p-2 text-xl px-4">
                    <h1 className="text-2xl">Donate</h1>
                </div>

                <div className="flex items-center text-5xl">
                    <p className="pl-3">GHC</p>
                    <input id="amount" className="bg-transparent w-32 rounded px-2  text-center" placeholder="100">

                    </input>
                </div>

                <div className="w-64 p-2 text-xl px-4">
                    <p className="text-lg">towards the fund</p>
                </div>

                <div className="flex p-2 text-xl px-4 flex-col">
                    <a href="#" onClick={(e) => deposit(e) }
                        className="p-2 rounded bg-green-400 w-full text-black text-center">Pay Now</a>

                    <p id="loading" className="text-sm text-center p-2 animate-pulse hidden">processing payment</p>
                </div>
            </div>


        </div>
        )

}


