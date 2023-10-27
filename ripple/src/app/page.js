'use client';
import {useEffect,useState} from 'react'

const Transaction = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex rounded bg-gray-800 w-full p-4 items-center">
        Received Money From Rawk

        <span className="text-xs flex flex-grow justify-end">
          <div className="p-2 bg-blue-800 rounded">
            In Memory Of Koffi
          </div>

        </span>
      </div>
    </div>
  )
}
export default function Home() {
  const [accountNumber, setAccountNumber] = useState();
  const [wallet, setWallet] = useState(0);
  const [isWithdrawn, setWithdrawn] = useState(false)

  useEffect( () => {
    if(!localStorage.id){
      localStorage.id = Date.now()
    }

    if(localStorage.walletId){
      setAccountNumber(localStorage.walletId)
      if(!localStorage.isWithdrawn){
        getAccountInfo()
      }else{
        setWithdrawn(true)
      }
    }
    }, []);

  const getAccountInfo = async () => {
    const _accountInfo = await fetch('/api/getCampaignInfo/?_campaignID=2')
    const accountInfo = await _accountInfo.json()

    setWallet(accountInfo.fundsRaised)
  }
  const updateWallet = (e) => {
    e.preventDefault()
    const walletId = document.getElementById('accountNumber').value
    localStorage.walletId = walletId
    setAccountNumber(walletId)
  }

  if(!accountNumber){
    return (
      <div className="w-screen h-screen flex justify-center items-center flex-col p-2 space-y-12">
        <div className="flex flex-col max-w-md w-full">
          <h1 className="font-bold text-2xl">Wallet Setup</h1>
          <p className="text-sm">we require your account number to deposit your donations into</p>
        </div>

        <form className={"flex flex-col space-y-2 max-w-md w-full"}>
          <input id="accountNumber" className={"bg-transparent rounded p-2 text-center"} type="text" placeholder={"Enter Your Account Number"}></input>
          <button onClick={(e) => updateWallet(e)} className={"p-2 bg-blue-400 rounded"}>Update Wallet</button>
        </form>
      </div>
      )
  }else{
    return (
      <div className="w-full h-full flex flex-col p-2">

        <div className="flex justify-end p-2">
          <div className="text-xl">GHC <span>{wallet}</span></div>
        </div>


        {!isWithdrawn ?  <Transaction/> : <>
        <div className="w-full flex items-center justify-center flex-grow text-center">
          <p className="w-64">
            Since your last withdrawal you have not created a new event
          </p>

        </div>
        </>}


        <div className="w-full absolute flex p-4 bottom-0 justify-end">
          <div className="w-1/2 flex">
            <a href="/withdraw" className="p-2 bg-green-600 rounded">Withdraw</a>
          </div>

          <div className="w-1/2 flex justify-end">
            <a href="/create" className="p-2 bg-green-600 rounded">Create Event</a>
          </div>


        </div>
      </div>
      )
  }
}


