'use client';
import {useEffect,useState} from 'react'
export default function Home() {
  const [accountNumber, setAccountNumber] = useState();

  useEffect(() => {
    if(!localStorage.id){
      localStorage.id = Date.now()
    }

    if(localStorage.walletId){
      setAccountNumber(localStorage.walletId)
    }

    }, []);


  const updateWallet = (e) => {
    e.preventDefault()
    const walletId = document.getElementById('accountNumber').value
    localStorage.walletId = walletId
    setAccountNumber(walletId)
  }

  if(!accountNumber){
    return (
      <div className="w-screen h-screen flex justify-center items-center flex flex-col">
        <form className={"flex flex-col space-y-2 max-w-md w-full"}>
          <input id="accountNumber" className={"p-2 rounded text-black"} type="text" placeholder={"Enter Your Account Number"}></input>
          <button onClick={(e) => updateWallet(e)} className={"p-2"}>Update Wallet</button>
        </form>
      </div>
      )
  }else{
    return (
      <div className="w-screen h-screen flex justify-center items-center flex flex-col">
        <p>You have no events created</p>
        <a href="/create" className="p-2">create an event</a>
      </div>
      )
  }
}


