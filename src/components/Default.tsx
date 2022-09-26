import { useRouter } from 'next/router'
import React, { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateLocation } from '../redux/dataparams'

export default function Default() {
    const dispatch = useDispatch()
    const router = useRouter()
    const handleSubmit = (e:any) => {
        e.preventDefault()
        router.push({
          pathname: "/Results",
        })
    }

    return (
    <div className="home">
        <div className="nav">
            <ul className='flex justify-evenly'>
            <li>Home</li>
            <li>Top Votes</li>
            <li>About Us</li>
            </ul>
        </div>
        <div className="flex justify-center items-center min-h-screen">
            <form onSubmit={handleSubmit} >
            <input onChange={e => dispatch(updateLocation(e.target.value))} type="text" id="rounded-zip" className=" text-stone-50 rounded-lg border-transparent appearance-none border border-gray-300 w-2/3 py-2 px-4 bg-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-900 font-serif text-xl font-extrabold text-center focus:border-transparent" 
                placeholder="Zip Code"
            />
            </form>
        </div>
    </div>
    )
  }


