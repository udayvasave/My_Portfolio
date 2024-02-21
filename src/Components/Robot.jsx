import React,{useEffect,useState} from 'react'
import ThreeDObject from './ThreeDObject';


const Robot = () => {

    const [showModel, setShowModel] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowModel(true);
        }, 1060);

        return ()=> clearTimeout(timer);
    });

  return (
    <div>
    {showModel && <ThreeDObject/>}
    </div>
  )
}

export default Robot