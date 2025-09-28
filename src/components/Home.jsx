import React from 'react'
import Navbar from './Navbar'
import { div } from 'motion/react-client'
import TrueFocus from './TrueFocus'

function Home() {
  return (
    <div>
        <Navbar />

        <div className='w-1/2 flex flex-col gap-10 justify-center items-center m-auto p-10 mt-15'>
            <TrueFocus 
                sentence="Cyber Scope"
                manualMode={false}
                blurAmount={5}
                borderColor="#73B117"
                animationDuration={2}
                pauseBetweenAnimations={1}
                />
            <p>
                Your all-in-one cybersecurity and digital intelligence platform.  
                Analyze threats, monitor vulnerabilities, and secure your digital presence with ease.  
            </p>
            
        </div>
    </div>
  )
}

export default Home