import React from 'react'

import Header from '../Header'
import Scan from '../Scan';

import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import Footer from '../Footer';

const Login = () => {

    const login = () => {
        return (
            <Scan />
        )
    }
  return (
    <main className='mt-5'>
        <Header/>
        <form className='flex flex-col justify-center items-center gap-5'>
            <div className='w-100 flex flex-col gap-3 p-8 border-2 border-[#A7FF18] rounded-3xl'>
                <p className="text-center text-3xl text-gray-300 mb-4">Register</p>

                <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <FaRegUserCircle size={28} color='#A7FF18'/>
                    <input required type='text' className="bg-slate-900 w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:ring-offset-2 focus:ring-offset-[#A7FF18]" placeholder="Username"/>
                </div>

                <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <TbLockPassword size={30} color='#A7FF18'/>
                    <input required type='email' className="bg-slate-900 w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:ring-offset-2 focus:ring-offset-[#A7FF18]" placeholder="Email" />
                </div>
                
                <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <MdOutlineEmail size={30} color='#A7FF18'/>
                    <input required type='password' className="bg-slate-900 w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:ring-offset-2 focus:ring-offset-[#A7FF18]" placeholder="Password" />
                </div>

                
                <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                    Accept terms of use
                    <div className="relative inline-block">
                        <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-[#A7FF18] bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" required/>
                        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-green-300 transition-all duration-200 peer-checked:left-7 peer-checked:bg-[#A7FF18]"></span>
                    </div>
                </label>

                <button onClick={(e) => login()} type='submit' className="inline-block cursor-pointer rounded-md bg-[#A7FF18] px-4 py-3.5 text-center text-sm font-semibold uppercase text-black transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 hover:text-[#A7FF18]">Register</button>
            </div>
        </form>
        <Footer />
    </main>
  )
}

export default Login