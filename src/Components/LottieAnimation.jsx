import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/Animation - 1709020583229.json'
import './lottie.css';

const LottieAnimation = () => {

    
  return (
    <>
   <Lottie className='lottie-animation'
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        height={350} // Default height
        width={350}  // Default width
        isStopped={false}
        isPaused={false}
      />
    </>
  )
}

export default LottieAnimation