import React, { useState } from 'react'
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Header from '../Header'
import Scan from '../Scan';
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

import Footer from '../Footer';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

  return (
    <main className='mt-5'>
        <form className='flex flex-col justify-center items-center gap-5'>
            <div className='w-fit flex flex-col gap-3 p-8 border-2 border-[#A7FF18] rounded-3xl items-center'>
                <div className="mt-4 flex flex-col gap-2">
                    <p className="text-xs text-[#A7FF18] opacity-80 flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                        <span>
                            <span className="text-[#A7FF18] text-3xl font-sans">Login</span>
                        </span>
                    </p>
                </div>
                
                <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <TbLockPassword size={30} color='#A7FF18'/>
                    <input required type='email' className="w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:ring-offset-2 focus:ring-offset-[#A7FF18]" placeholder="Email" />
                </div>
                
                <div className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
                    <MdOutlineEmail size={30} color='#A7FF18'/>
                    <input required type='password' className="w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18] focus:ring-offset-2 focus:ring-offset-[#A7FF18]" placeholder="Password" />
                </div>

                
                <label className="flex gap-2 cursor-pointer p-1 text-slate-400">
                    Accept terms of use
                    <div className="relative inline-block">
                        <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-[#A7FF18] bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" required/>
                        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-green-300 transition-all duration-200 peer-checked:left-7 peer-checked:bg-[#A7FF18]"></span>
                    </div>
                </label>

                <button onClick={(e) => login()} type='submit' className="w-full inline-block cursor-pointer rounded-md bg-[#A7FF18] px-4 py-3.5 text-center text-sm font-semibold uppercase text-black transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 hover:text-[#A7FF18]">Register</button>
            </div>
        </form>
    </main>
  )
}

export default Login