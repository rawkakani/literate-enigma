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
      <div className="w-screen h-screen flex justify-center items-center flex-col p-2">
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
          <div className="text-xl">GHC 0.00</div>
        </div>

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


