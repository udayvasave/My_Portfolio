import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/lottie/Animation - 1709020583229.json'

const LottieAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // The imported animation JSON file
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <>
    <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
      />
    </>
  )
}

export default LottieAnimation