import React from 'react'
import Navbar from './Navbar'
import { div } from 'motion/react-client'
import TrueFocus from './TrueFocus'
import { useRef } from 'react';

function Home() {
  return (
    <div>
        <Navbar />

        <div className='w-1/2 flex flex-col gap-10 justify-center items-center m-auto p-10 mt-5'>
            <TrueFocus 
                sentence="Cyber Scope"
                manualMode={false}
                blurAmount={5}
                borderColor="#73B117"
                animationDuration={2}
                pauseBetweenAnimations={1}
            />
            <div className='text-center flex flex-col gap-10'>
                <p>
                    Your all-in-one cybersecurity and digital intelligence platform.  
                    Analyze threats, monitor vulnerabilities, and secure your digital presence with ease.  
                </p>
                <p className='text-[#A7FF18]'>
                    Get started by creating your <a href="/CyberScope/register" className='text-white underline'>account</a> or <a href="/CyberScope/login" className='text-white underline'>log in</a> if you’re already a member.  
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home