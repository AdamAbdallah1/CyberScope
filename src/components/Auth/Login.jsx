import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in: ", userCredential.user);
      navigate("/CyberScope/scan");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className='mt-5 flex justify-center'>
      <form className='flex flex-col gap-5 w-full max-w-md' onSubmit={handleLogin}>
        <div className='flex flex-col gap-3 p-8 border-2 border-[#A7FF18] rounded-3xl items-center'>
          <h2 className="text-3xl font-sans text-[#A7FF18]">Login</h2>

          <div className='flex flex-col lg:flex-row gap-2 items-center w-full'>
            <MdOutlineEmail size={30} color='#A7FF18'/>
            <input 
              required 
              type='email' 
              placeholder="Email" 
              className="w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='flex flex-col lg:flex-row gap-2 items-center w-full'>
            <TbLockPassword size={30} color='#A7FF18'/>
            <input 
              required 
              type='password' 
              placeholder="Password" 
              className="w-full rounded-lg border border-[#A7FF18] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A7FF18]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="flex gap-2 items-center cursor-pointer text-slate-400 w-full">
            Accept terms of use
            <div className="relative inline-block">
              <input type="checkbox" required className="peer h-6 w-12 appearance-none rounded-full border border-[#A7FF18] bg-gray-400 cursor-pointer"/>
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-green-300 transition-all duration-200 peer-checked:left-7 peer-checked:bg-[#A7FF18]"></span>
            </div>
          </label>

          <button type='submit' className="w-full rounded-md bg-[#A7FF18] px-4 py-3.5 text-center text-sm font-semibold uppercase text-black transition duration-200 ease-in-out hover:bg-gray-800 hover:text-[#A7FF18] active:scale-95">
            Login
          </button>

          <a href="/CyberScope/register" className="text-sm text-[#A7FF18] hover:underline">Don't have an account? Register</a>

          {error && <p className='text-red-600 mt-2'>{error}</p>}
        </div>
      </form>
    </main>
  );
}

export default Login;
